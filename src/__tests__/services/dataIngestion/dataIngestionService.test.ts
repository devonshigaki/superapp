import { fetchUserData, updateUserData, fetchReportData, createReport, publishReportData } from '../../../services/dataIngestion/dataIngestionService';
import { firestore } from '../../../database/firestoreService';
import { mockFirestore } from '../../mocks/firestore';

jest.mock('../../../database/firestoreService');

describe('Data Ingestion Service', () => {
  beforeEach(() => {
    mockFirestore();
  });

  it('should fetch user data', async () => {
    const userId = 'testUserId';
    const mockUserData = {
      id: userId,
      email: 'test@example.com',
    };
    (firestore().collection('users').doc(userId).get as jest.Mock).mockResolvedValue({
      data: () => mockUserData,
    });
    const userData = await fetchUserData(userId);
    expect(userData).toEqual(mockUserData);
  });

  it('should update user data', async () => {
    const userId = 'testUserId';
    const mockUpdateData = {
      firstName: 'Test',
    };
    (firestore().collection('users').doc(userId).update as jest.Mock).mockResolvedValue();
    await updateUserData(userId, mockUpdateData);
    expect(firestore().collection('users').doc(userId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch report data', async () => {
    const reportId = 'testReportId';
    const mockReportData = {
      id: reportId,
      userId: 'testUserId',
    };
    (firestore().collection('reports').doc(reportId).get as jest.Mock).mockResolvedValue({
      data: () => mockReportData,
    });
    const reportData = await fetchReportData(reportId);
    expect(reportData).toEqual(mockReportData);
  });

  it('should create a report', async () => {
    const mockReportData = {
      userId: 'testUserId',
    };
    (firestore().collection('reports').add as jest.Mock).mockResolvedValue({
      id: 'testReportId',
    });
    const reportId = await createReport(mockReportData);
    expect(reportId).toBe('testReportId');
  });

  it('should publish report data', async () => {
    const mockReportData = {
      userId: 'testUserId',
    };
    (Buffer.from as jest.Mock).mockReturnValue(new Buffer('test'));
    (publishMessage as jest.Mock).mockResolvedValue(['testMessageId']);
    await publishReportData(mockReportData);
    expect(publishMessage).toHaveBeenCalledWith('freshcredit-reports', new Buffer('test'));
  });
});
