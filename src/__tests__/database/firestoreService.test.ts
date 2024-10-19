import { fetchUserData, createUser, updateUserData, fetchReportData, createReportData, updateReportData, fetchDataSourceData, createDataSourceData, updateDataSourceData, fetchProviderData, createProviderData, updateProviderData, fetchOfferData, createOfferData, updateOfferData, fetchUserOfferData, createUserOfferData, updateUserOfferData, fetchAchievementData, createAchievementData, updateAchievementData, fetchUserAchievementData, createUserAchievementData, updateUserAchievementData, fetchProviderDataRequirementData, createProviderDataRequirementData, updateProviderDataRequirementData, fetchBlockchainRecordData, createBlockchainRecordData, updateBlockchainRecordData } from '../../../database/firestoreService';
import { firestore } from '../../../database/firestoreService';
import { mockFirestore } from '../../mocks/firestore';

jest.mock('../../../database/firestoreService');

describe('Firestore Service', () => {
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

  it('should create a user', async () => {
    const mockUserData = {
      email: 'test@example.com',
    };
    (firestore().collection('users').add as jest.Mock).mockResolvedValue({
      id: 'testUserId',
    });
    const userId = await createUser(mockUserData);
    expect(userId).toBe('testUserId');
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

  it('should create report data', async () => {
    const mockReportData = {
      userId: 'testUserId',
    };
    (firestore().collection('reports').add as jest.Mock).mockResolvedValue({
      id: 'testReportId',
    });
    const reportId = await createReportData(mockReportData);
    expect(reportId).toBe('testReportId');
  });

  it('should update report data', async () => {
    const reportId = 'testReportId';
    const mockUpdateData = {
      userId: 'testUserId',
    };
    (firestore().collection('reports').doc(reportId).update as jest.Mock).mockResolvedValue();
    await updateReportData(reportId, mockUpdateData);
    expect(firestore().collection('reports').doc(reportId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch data source data', async () => {
    const dataSourceId = 'testDataSourceId';
    const mockDataSourceData = {
      id: dataSourceId,
      userId: 'testUserId',
    };
    (firestore().collection('dataSources').doc(dataSourceId).get as jest.Mock).mockResolvedValue({
      data: () => mockDataSourceData,
    });
    const dataSourceData = await fetchDataSourceData(dataSourceId);
    expect(dataSourceData).toEqual(mockDataSourceData);
  });

  it('should create data source data', async () => {
    const mockDataSourceData = {
      userId: 'testUserId',
    };
    (firestore().collection('dataSources').add as jest.Mock).mockResolvedValue({
      id: 'testDataSourceId',
    });
    const dataSourceId = await createDataSourceData(mockDataSourceData);
    expect(dataSourceId).toBe('testDataSourceId');
  });

  it('should update data source data', async () => {
    const dataSourceId = 'testDataSourceId';
    const mockUpdateData = {
      userId: 'testUserId',
    };
    (firestore().collection('dataSources').doc(dataSourceId).update as jest.Mock).mockResolvedValue();
    await updateDataSourceData(dataSourceId, mockUpdateData);
    expect(firestore().collection('dataSources').doc(dataSourceId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch provider data', async () => {
    const providerId = 'testProviderId';
    const mockProviderData = {
      id: providerId,
      name: 'Test Provider',
    };
    (firestore().collection('providers').doc(providerId).get as jest.Mock).mockResolvedValue({
      data: () => mockProviderData,
    });
    const providerData = await fetchProviderData(providerId);
    expect(providerData).toEqual(mockProviderData);
  });

  it('should create provider data', async () => {
    const mockProviderData = {
      name: 'Test Provider',
    };
    (firestore().collection('providers').add as jest.Mock).mockResolvedValue({
      id: 'testProviderId',
    });
    const providerId = await createProviderData(mockProviderData);
    expect(providerId).toBe('testProviderId');
  });

  it('should update provider data', async () => {
    const providerId = 'testProviderId';
    const mockUpdateData = {
      name: 'Test Provider',
    };
    (firestore().collection('providers').doc(providerId).update as jest.Mock).mockResolvedValue();
    await updateProviderData(providerId, mockUpdateData);
    expect(firestore().collection('providers').doc(providerId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch offer data', async () => {
    const offerId = 'testOfferId';
    const mockOfferData = {
      id: offerId,
      providerId: 'testProviderId',
    };
    (firestore().collection('offers').doc(offerId).get as jest.Mock).mockResolvedValue({
      data: () => mockOfferData,
    });
    const offerData = await fetchOfferData(offerId);
    expect(offerData).toEqual(mockOfferData);
  });

  it('should create offer data', async () => {
    const mockOfferData = {
      providerId: 'testProviderId',
    };
    (firestore().collection('offers').add as jest.Mock).mockResolvedValue({
      id: 'testOfferId',
    });
    const offerId = await createOfferData(mockOfferData);
    expect(offerId).toBe('testOfferId');
  });

  it('should update offer data', async () => {
    const offerId = 'testOfferId';
    const mockUpdateData = {
      providerId: 'testProviderId',
    };
    (firestore().collection('offers').doc(offerId).update as jest.Mock).mockResolvedValue();
    await updateOfferData(offerId, mockUpdateData);
    expect(firestore().collection('offers').doc(offerId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch user offer data', async () => {
    const userOfferId = 'testUserOfferId';
    const mockUserOfferData = {
      id: userOfferId,
      userId: 'testUserId',
      offerId: 'testOfferId',
    };
    (firestore().collection('userOffers').doc(userOfferId).get as jest.Mock).mockResolvedValue({
      data: () => mockUserOfferData,
    });
    const userOfferData = await fetchUserOfferData(userOfferId);
    expect(userOfferData).toEqual(mockUserOfferData);
  });

  it('should create user offer data', async () => {
    const mockUserOfferData = {
      userId: 'testUserId',
      offerId: 'testOfferId',
    };
    (firestore().collection('userOffers').add as jest.Mock).mockResolvedValue({
      id: 'testUserOfferId',
    });
    const userOfferId = await createUserOfferData(mockUserOfferData);
    expect(userOfferId).toBe('testUserOfferId');
  });

  it('should update user offer data', async () => {
    const userOfferId = 'testUserOfferId';
    const mockUpdateData = {
      userId: 'testUserId',
      offerId: 'testOfferId',
    };
    (firestore().collection('userOffers').doc(userOfferId).update as jest.Mock).mockResolvedValue();
    await updateUserOfferData(userOfferId, mockUpdateData);
    expect(firestore().collection('userOffers').doc(userOfferId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch achievement data', async () => {
    const achievementId = 'testAchievementId';
    const mockAchievementData = {
      id: achievementId,
      name: 'Test Achievement',
    };
    (firestore().collection('achievements').doc(achievementId).get as jest.Mock).mockResolvedValue({
      data: () => mockAchievementData,
    });
    const achievementData = await fetchAchievementData(achievementId);
    expect(achievementData).toEqual(mockAchievementData);
  });

  it('should create achievement data', async () => {
    const mockAchievementData = {
      name: 'Test Achievement',
    };
    (firestore().collection('achievements').add as jest.Mock).mockResolvedValue({
      id: 'testAchievementId',
    });
    const achievementId = await createAchievementData(mockAchievementData);
    expect(achievementId).toBe('testAchievementId');
  });

  it('should update achievement data', async () => {
    const achievementId = 'testAchievementId';
    const mockUpdateData = {
      name: 'Test Achievement',
    };
    (firestore().collection('achievements').doc(achievementId).update as jest.Mock).mockResolvedValue();
    await updateAchievementData(achievementId, mockUpdateData);
    expect(firestore().collection('achievements').doc(achievementId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch user achievement data', async () => {
    const userAchievementId = 'testUserAchievementId';
    const mockUserAchievementData = {
      id: userAchievementId,
      userId: 'testUserId',
      achievementId: 'testAchievementId',
    };
    (firestore().collection('userAchievements').doc(userAchievementId).get as jest.Mock).mockResolvedValue({
      data: () => mockUserAchievementData,
    });
    const userAchievementData = await fetchUserAchievementData(userAchievementId);
    expect(userAchievementData).toEqual(mockUserAchievementData);
  });

  it('should create user achievement data', async () => {
    const mockUserAchievementData = {
      userId: 'testUserId',
      achievementId: 'testAchievementId',
    };
    (firestore().collection('userAchievements').add as jest.Mock).mockResolvedValue({
      id: 'testUserAchievementId',
    });
    const userAchievementId = await createUserAchievementData(mockUserAchievementData);
    expect(userAchievementId).toBe('testUserAchievementId');
  });

  it('should update user achievement data', async () => {
    const userAchievementId = 'testUserAchievementId';
    const mockUpdateData = {
      userId: 'testUserId',
      achievementId: 'testAchievementId',
    };
    (firestore().collection('userAchievements').doc(userAchievementId).update as jest.Mock).mockResolvedValue();
    await updateUserAchievementData(userAchievementId, mockUpdateData);
    expect(firestore().collection('userAchievements').doc(userAchievementId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch provider data requirement data', async () => {
    const providerDataRequirementId = 'testProviderDataRequirementId';
    const mockProviderDataRequirementData = {
      id: providerDataRequirementId,
      providerId: 'testProviderId',
      dataType: 'testDataType',
    };
    (firestore().collection('providerDataRequirements').doc(providerDataRequirementId).get as jest.Mock).mockResolvedValue({
      data: () => mockProviderDataRequirementData,
    });
    const providerDataRequirementData = await fetchProviderDataRequirementData(providerDataRequirementId);
    expect(providerDataRequirementData).toEqual(mockProviderDataRequirementData);
  });

  it('should create provider data requirement data', async () => {
    const mockProviderDataRequirementData = {
      providerId: 'testProviderId',
      dataType: 'testDataType',
    };
    (firestore().collection('providerDataRequirements').add as jest.Mock).mockResolvedValue({
      id: 'testProviderDataRequirementId',
    });
    const providerDataRequirementId = await createProviderDataRequirementData(mockProviderDataRequirementData);
    expect(providerDataRequirementId).toBe('testProviderDataRequirementId');
  });

  it('should update provider data requirement data', async () => {
    const providerDataRequirementId = 'testProviderDataRequirementId';
    const mockUpdateData = {
      providerId: 'testProviderId',
      dataType: 'testDataType',
    };
    (firestore().collection('providerDataRequirements').doc(providerDataRequirementId).update as jest.Mock).mockResolvedValue();
    await updateProviderDataRequirementData(providerDataRequirementId, mockUpdateData);
    expect(firestore().collection('providerDataRequirements').doc(providerDataRequirementId).update).toHaveBeenCalledWith(mockUpdateData);
  });

  it('should fetch blockchain record data', async () => {
    const blockchainRecordId = 'testBlockchainRecordId';
    const mockBlockchainRecordData = {
      id: blockchainRecordId,
      reportHash: 'testReportHash',
      blockScore: 100,
    };
    (firestore().collection('blockchainRecords').doc(blockchainRecordId).get as jest.Mock).mockResolvedValue({
      data: () => mockBlockchainRecordData,
    });
    const blockchainRecordData = await fetchBlockchainRecordData(blockchainRecordId);
    expect(blockchainRecordData).toEqual(mockBlockchainRecordData);
  });

  it('should create blockchain record data', async () => {
    const mockBlockchainRecordData = {
      reportHash: 'testReportHash',
      blockScore: 100,
    };
    (firestore().collection('blockchainRecords').add as jest.Mock).mockResolvedValue({
      id: 'testBlockchainRecordId',
    });
    const blockchainRecordId = await createBlockchainRecordData(mockBlockchainRecordData);
    expect(blockchainRecordId).toBe('testBlockchainRecordId');
  });

  it('should update blockchain record data', async () => {
    const blockchainRecordId = 'testBlockchainRecordId';
    const mockUpdateData = {
      reportHash: 'testReportHash',
      blockScore: 100,
    };
    (firestore().collection('blockchainRecords').doc(blockchainRecordId).update as jest.Mock).mockResolvedValue();
    await updateBlockchainRecordData(blockchainRecordId, mockUpdateData);
    expect(firestore().collection('blockchainRecords').doc(blockchainRecordId).update).toHaveBeenCalledWith(mockUpdateData);
  });
});
