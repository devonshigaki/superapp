import { fetchReports, fetchReportsByUserId, deleteReport, createReport, updateReport } from '../../../database/localDatabaseService';
import { mockLocalDatabase } from '../../mocks/localDatabase';

jest.mock('../../../database/localDatabaseService');

describe('Local Database Service', () => {
  beforeEach(() => {
    mockLocalDatabase();
  });

  it('should fetch reports', async () => {
    const mockReports = [{
      id: 'testReportId',
      userId: 'testUserId',
    }];
    (localDatabase.all as jest.Mock).mockResolvedValue(mockReports);
    const reports = await fetchReports();
    expect(reports).toEqual(mockReports);
  });

  it('should fetch reports by user ID', async () => {
    const userId = 'testUserId';
    const mockReports = [{
      id: 'testReportId',
      userId: userId,
    }];
    (localDatabase.all as jest.Mock).mockResolvedValue(mockReports);
    const reports = await fetchReportsByUserId(userId);
    expect(reports).toEqual(mockReports);
  });

  it('should delete a report', async () => {
    const reportId = 'testReportId';
    (localDatabase.run as jest.Mock).mockResolvedValue();
    await deleteReport(reportId);
    expect(localDatabase.run).toHaveBeenCalledWith('DELETE FROM reports WHERE id = ?', [reportId]);
  });

  it('should create a report', async () => {
    const mockReportData = {
      userId: 'testUserId',
    };
    (localDatabase.run as jest.Mock).mockResolvedValue({
      lastID: 'testReportId',
    });
    const reportId = await createReport(mockReportData);
    expect(reportId).toBe('testReportId');
  });

  it('should update a report', async () => {
    const reportId = 'testReportId';
    const mockReportData = {
      userId: 'testUserId',
    };
    (localDatabase.run as jest.Mock).mockResolvedValue();
    await updateReport(reportId, mockReportData);
    expect(localDatabase.run).toHaveBeenCalledWith('UPDATE reports SET userId = ? WHERE id = ?', [mockReportData.userId, reportId]);
  });
});
