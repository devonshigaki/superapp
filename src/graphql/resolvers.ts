import { User, Report, DataSource, Provider, Offer, UserOffer, Achievement, UserAchievement, ProviderDataRequirement, BlockchainRecord } from '../database/firestoreService';
import { fetchUserData, createUser, updateUserData, fetchReportData, createReportData, updateReportData, fetchDataSourceData, createDataSourceData, updateDataSourceData, fetchProviderData, createProviderData, updateProviderData, fetchOfferData, createOfferData, updateOfferData, fetchUserOfferData, createUserOfferData, updateUserOfferData, fetchAchievementData, createAchievementData, updateAchievementData, fetchUserAchievementData, createUserAchievementData, updateUserAchievementData, fetchProviderDataRequirementData, createProviderDataRequirementData, updateProviderDataRequirementData, fetchBlockchainRecordData, createBlockchainRecordData, updateBlockchainRecordData } from '../database/firestoreService';
import { fetchReports, createReport, updateReport, fetchReportsByUserId, deleteReport } from '../database/localDatabaseService';
import { createLog, fetchLogs, fetchLogsByEventType, fetchLogsByUserId, fetchLogsByTimestamp, fetchLogsByTimestampRange, deleteLogsByEventType, deleteLogsByTimestamp, deleteLogsByTimestampRange } from '../database/cloudSqlService';
import { calculateBlockScore } from '../blockchain/blockchainService';
import { getYouTubeData } from '../services/system/youtubeService';

const resolvers = {
  Query: {
    user: async (_, { id }, { user }) => {
      if (user) {
        return user;
      }
      return await fetchUserData(id);
    },
    reports: async () => {
      return await fetchReports();
    },
    reportsByUserId: async (_, { userId }) => {
      return await fetchReportsByUserId(userId);
    },
    dataSource: async (_, { dataSourceId }) => {
      return await fetchDataSourceData(dataSourceId);
    },
    provider: async (_, { providerId }) => {
      return await fetchProviderData(providerId);
    },
    offer: async (_, { offerId }) => {
      return await fetchOfferData(offerId);
    },
    userOffer: async (_, { userOfferId }) => {
      return await fetchUserOfferData(userOfferId);
    },
    achievement: async (_, { achievementId }) => {
      return await fetchAchievementData(achievementId);
    },
    userAchievement: async (_, { userAchievementId }) => {
      return await fetchUserAchievementData(userAchievementId);
    },
    providerDataRequirement: async (_, { providerDataRequirementId }) => {
      return await fetchProviderDataRequirementData(providerDataRequirementId);
    },
    blockchainRecord: async (_, { blockchainRecordId }) => {
      return await fetchBlockchainRecordData(blockchainRecordId);
    },
    logs: async () => {
      return await fetchLogs();
    },
    logsByEventType: async (_, { eventType }) => {
      return await fetchLogsByEventType(eventType);
    },
    logsByUserId: async (_, { userId }) => {
      return await fetchLogsByUserId(userId);
    },
    logsByTimestamp: async (_, { timestamp }) => {
      return await fetchLogsByTimestamp(timestamp);
    },
    logsByTimestampRange: async (_, { startTimestamp, endTimestamp }) => {
      return await fetchLogsByTimestampRange(startTimestamp, endTimestamp);
    },
  },
  Mutation: {
    createUser: async (_, { userData }) => {
      return await createUser(userData);
    },
    updateUser: async (_, { userId, userData }) => {
      return await updateUserData(userId, userData);
    },
    createReport: async (_, { reportData }) => {
      return await createReportData(reportData);
    },
    updateReport: async (_, { reportId, reportData }) => {
      return await updateReportData(reportId, reportData);
    },
    createDataSource: async (_, { dataSourceData }) => {
      return await createDataSourceData(dataSourceData);
    },
    updateDataSource: async (_, { dataSourceId, dataSourceData }) => {
      return await updateDataSourceData(dataSourceId, dataSourceData);
    },
    createProvider: async (_, { providerData }) => {
      return await createProviderData(providerData);
    },
    updateProvider: async (_, { providerId, providerData }) => {
      return await updateProviderData(providerId, providerData);
    },
    createOffer: async (_, { offerData }) => {
      return await createOfferData(offerData);
    },
    updateOffer: async (_, { offerId, offerData }) => {
      return await updateOfferData(offerId, offerData);
    },
    createUserOffer: async (_, { userOfferData }) => {
      return await createUserOfferData(userOfferData);
    },
    updateUserOffer: async (_, { userOfferId, userOfferData }) => {
      return await updateUserOfferData(userOfferId, userOfferData);
    },
    createAchievement: async (_, { achievementData }) => {
      return await createAchievementData(achievementData);
    },
    updateAchievement: async (_, { achievementId, achievementData }) => {
      return await updateAchievementData(achievementId, achievementData);
    },
    createUserAchievement: async (_, { userAchievementData }) => {
      return await createUserAchievementData(userAchievementData);
    },
    updateUserAchievement: async (_, { userAchievementId, userAchievementData }) => {
      return await updateUserAchievementData(userAchievementId, userAchievementData);
    },
    createProviderDataRequirement: async (_, { providerDataRequirementData }) => {
      return await createProviderDataRequirementData(providerDataRequirementData);
    },
    updateProviderDataRequirement: async (_, { providerDataRequirementId, providerDataRequirementData }) => {
      return await updateProviderDataRequirementData(providerDataRequirementId, providerDataRequirementData);
    },
    createBlockchainRecord: async (_, { blockchainRecordData }) => {
      return await createBlockchainRecordData(blockchainRecordData);
    },
    updateBlockchainRecord: async (_, { blockchainRecordId, blockchainRecordData }) => {
      return await updateBlockchainRecordData(blockchainRecordId, blockchainRecordData);
    },
    createLog: async (_, { logData }) => {
      return await createLog(logData);
    },
    deleteLogsByEventType: async (_, { eventType }) => {
      return await deleteLogsByEventType(eventType);
    },
    deleteLogsByTimestamp: async (_, { timestamp }) => {
      return await deleteLogsByTimestamp(timestamp);
    },
    deleteLogsByTimestampRange: async (_, { startTimestamp, endTimestamp }) => {
      return await deleteLogsByTimestampRange(startTimestamp, endTimestamp);
    },
  },
  User: {
    reports: async (parent) => {
      return await fetchReportsByUserId(parent.id);
    },
    offers: async (parent) => {
      return await fetchUserOfferData(parent.id);
    },
    achievements: async (parent) => {
      return await fetchUserAchievementData(parent.id);
    },
  },
  Report: {
    dataSources: async (parent) => {
      return await fetchDataSourceData(parent.id);
    },
    provider: async (parent) => {
      return await fetchProviderData(parent.providerId);
    },
    blockScore: async (parent) => {
      return await calculateBlockScore(parent);
    },
  },
  DataSource: {
    provider: async (parent) => {
      return await fetchProviderData(parent.providerId);
    },
  },
  Provider: {
    offers: async (parent) => {
      return await fetchOfferData(parent.id);
    },
    dataRequirements: async (parent) => {
      return await fetchProviderDataRequirementData(parent.id);
    },
  },
  Offer: {
    provider: async (parent) => {
      return await fetchProviderData(parent.providerId);
    },
  },
  UserOffer: {
    user: async (parent) => {
      return await fetchUserData(parent.userId);
    },
    offer: async (parent) => {
      return await fetchOfferData(parent.offerId);
    },
  },
  Achievement: {
    users: async (parent) => {
      return await fetchUserAchievementData(parent.id);
    },
  },
  UserAchievement: {
    achievement: async (parent) => {
      return await fetchAchievementData(parent.achievementId);
    },
  },
  ProviderDataRequirement: {
    provider: async (parent) => {
      return await fetchProviderData(parent.providerId);
    },
  },
  BlockchainRecord: {
    blockScore: async (parent) => {
      return await calculateBlockScore(parent);
    },
  },
};

export default resolvers;
