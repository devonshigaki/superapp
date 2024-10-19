import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String
    firstName: String!
    lastName: String!
    createdAt: Date!
    updatedAt: Date!
    reports: [Report]
    dataSources: [DataSource]
    offers: [UserOffer]
    achievements: [UserAchievement]
    blockScore: Int
  }

  type Report {
    id: ID!
    userId: String!
    reportHash: String!
    blockScore: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  type DataSource {
    id: ID!
    userId: String!
    sourceType: String!
    sourceId: String!
    connectedAt: Date!
    updatedAt: Date!
  }

  type Provider {
    id: ID!
    name: String!
    description: String!
    createdAt: Date!
    updatedAt: Date!
    offers: [Offer]
    dataRequirements: [ProviderDataRequirement]
  }

  type Offer {
    id: ID!
    providerId: String!
    description: String!
    criteria: String!
  }

  type UserOffer {
    id: ID!
    userId: String!
    offerId: String!
    status: String!
  }

  type Achievement {
    id: ID!
    name: String!
    description: String!
  }

  type UserAchievement {
    id: ID!
    userId: String!
    achievementId: String!
  }

  type ProviderDataRequirement {
    id: ID!
    providerId: String!
    dataType: String!
  }

  type BlockchainRecord {
    id: ID!
    reportHash: String!
    blockScore: Int!
  }

  type Log {
    id: ID!
    eventType: String!
    userId: String!
    timestamp: Date!
  }

  type YouTubeData {
    items: [YouTubeChannel]
  }

  type YouTubeChannel {
    id: ID!
    snippet: YouTubeSnippet
  }

  type YouTubeSnippet {
    title: String!
    description: String!
    publishedAt: Date!
  }

  type Query {
    user(userId: ID!): User
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
    youtubeData: YouTubeData
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
    deleteLogsByTimestamp(timestamp: Date!): Boolean
    deleteLogsByTimestampRange(startTimestamp: Date!, endTimestamp: Date!): Boolean
  }

  input UserInput {
    email: String!
    password: String
    firstName: String!
    lastName: String!
  }

  input ReportInput {
    userId: String!
    reportHash: String!
    blockScore: Int!
  }

  input DataSourceInput {
    userId: String!
    sourceType: String!
    sourceId: String!
  }

  input ProviderInput {
    name: String!
    description: String!
  }

  input OfferInput {
    providerId: String!
    description: String!
    criteria: String!
  }

  input UserOfferInput {
    userId: String!
    offerId: String!
    status: String!
  }

  input AchievementInput {
    name: String!
    description: String!
  }

  input UserAchievementInput {
    userId: String!
    achievementId: String!
  }

  input ProviderDataRequirementInput {
    providerId: String!
    dataType: String!
  }

  input BlockchainRecordInput {
    reportHash: String!
    blockScore: Int!
  }

  input LogInput {
    eventType: String!
    userId: String!
    timestamp: Date!
  }
`;

export default typeDefs;
