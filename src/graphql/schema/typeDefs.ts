import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    reports: [Report]
    offers: [UserOffer]
    achievements: [UserAchievement]
  }

  type Report {
    id: ID!
    userId: ID!
    dataSources: [DataSource]
    score: Int
    providerId: ID
    blockScore: Int
  }

  type DataSource {
    id: ID!
    reportId: ID!
    providerId: ID!
    data: String
  }

  type Provider {
    id: ID!
    name: String!
    offers: [Offer]
    dataRequirements: [ProviderDataRequirement]
  }

  type Offer {
    id: ID!
    providerId: ID!
    description: String!
    criteria: String
  }

  type UserOffer {
    id: ID!
    userId: ID!
    offerId: ID!
    status: String
  }

  type Achievement {
    id: ID!
    name: String!
    description: String!
    users: [UserAchievement]
  }

  type UserAchievement {
    id: ID!
    userId: ID!
    achievementId: ID!
    dateAchieved: String
  }

  type ProviderDataRequirement {
    id: ID!
    providerId: ID!
    dataPoint: String!
    isRequired: Boolean!
  }

  type BlockchainRecord {
    id: ID!
    reportId: ID!
    hash: String!
    blockScore: Int
  }

  type Log {
    id: ID!
    userId: ID!
    eventType: String!
    timestamp: String!
    data: String
  }

  type Query {
    user(id: ID!): User
    reports: [Report]
    reportsByUserId(userId: ID!): [Report]
    dataSource(dataSourceId: ID!): DataSource
    provider(providerId: ID!): Provider
    offer(offerId: ID!): Offer
    userOffer(userOfferId: ID!): UserOffer
    achievement(achievementId: ID!): Achievement
    userAchievement(userAchievementId: ID!): UserAchievement
    providerDataRequirement(providerDataRequirementId: ID!): ProviderDataRequirement
    blockchainRecord(blockchainRecordId: ID!): BlockchainRecord
    logs: [Log]
    logsByEventType(eventType: String!): [Log]
    logsByUserId(userId: ID!): [Log]
    logsByTimestamp(timestamp: String!): [Log]
    logsByTimestampRange(startTimestamp: String!, endTimestamp: String!): [Log]
  }

  type Mutation {
    createUser(userData: UserInput!): User
    updateUser(userId: ID!, userData: UserInput!): User
    createReport(reportData: ReportInput!): Report
    updateReport(reportId: ID!, reportData: ReportInput!): Report
    createDataSource(dataSourceData: DataSourceInput!): DataSource
    updateDataSource(dataSourceId: ID!, dataSourceData: DataSourceInput!): DataSource
    createProvider(providerData: ProviderInput!): Provider
    updateProvider(providerId: ID!, providerData: ProviderInput!): Provider
    createOffer(offerData: OfferInput!): Offer
    updateOffer(offerId: ID!, offerData: OfferInput!): Offer
    createUserOffer(userOfferData: UserOfferInput!): UserOffer
    updateUserOffer(userOfferId: ID!, userOfferData: UserOfferInput!): UserOffer
    createAchievement(achievementData: AchievementInput!): Achievement
    updateAchievement(achievementId: ID!, achievementData: AchievementInput!): Achievement
    createUserAchievement(userAchievementData: UserAchievementInput!): UserAchievement
    updateUserAchievement(userAchievementId: ID!, userAchievementData: UserAchievementInput!): UserAchievement
    createProviderDataRequirement(providerDataRequirementData: ProviderDataRequirementInput!): ProviderDataRequirement
    updateProviderDataRequirement(providerDataRequirementId: ID!, providerDataRequirementData: ProviderDataRequirementInput!): ProviderDataRequirement
    createBlockchainRecord(blockchainRecordData: BlockchainRecordInput!): BlockchainRecord
    updateBlockchainRecord(blockchainRecordId: ID!, blockchainRecordData: BlockchainRecordInput!): BlockchainRecord
    createLog(logData: LogInput!): Log
    deleteLogsByEventType(eventType: String!): Boolean
    deleteLogsByTimestamp(timestamp: String!): Boolean
    deleteLogsByTimestampRange(startTimestamp: String!, endTimestamp: String!): Boolean
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
  }

  input ReportInput {
    userId: ID!
    dataSources: [DataSourceInput]
    score: Int
    providerId: ID
  }

  input DataSourceInput {
    providerId: ID!
    data: String
  }

  input ProviderInput {
    name: String!
    offers: [OfferInput]
    dataRequirements: [ProviderDataRequirementInput]
  }

  input OfferInput {
    providerId: ID!
    description: String!
    criteria: String
  }

  input UserOfferInput {
    userId: ID!
    offerId: ID!
    status: String
  }

  input AchievementInput {
    name: String!
    description: String!
  }

  input UserAchievementInput {
    userId: ID!
    achievementId: ID!
    dateAchieved: String
  }

  input ProviderDataRequirementInput {
    providerId: ID!
    dataPoint: String!
    isRequired: Boolean!
  }

  input BlockchainRecordInput {
    reportId: ID!
    hash: String!
  }

  input LogInput {
    userId: ID!
    eventType: String!
    data: String
  }
`;

export default typeDefs;
