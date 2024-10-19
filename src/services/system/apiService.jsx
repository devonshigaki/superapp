import axios from 'axios';
import * as plaidService from '../external/plaidService';
import * as facebookService from '../external/facebookService';
import * as instagramService from '../external/instagramService';
import * as amazonService from '../external/amazonService';
import * as youtubeService from '../external/youtubeService';
import * as stripeService from '../external/stripeService';
import * as pubsubService from '../external/pubsubService';
import * as cloudFunctionsService from '../external/cloudFunctionsService';
import * as dataIngestionService from '../external/dataIngestionService';

const API_BASE_URL = 'https://api.freshcredit.com'; // Replace with your actual API base URL

// Create a central axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // Add any other common configuration here, like headers, timeouts, etc.
});

export const getPlaidAccessToken = plaidService.getPlaidAccessToken;
export const getPlaidTransactions = plaidService.getPlaidTransactions;
export const getFacebookData = facebookService.getFacebookData;
export const getInstagramData = instagramService.getInstagramData;
export const authenticateWithAmazon = amazonService.authenticateWithAmazon;
export const authenticateWithYouTube = youtubeService.authenticateWithYouTube;
export const createStripeCheckoutSession = stripeService.createStripeCheckoutSession;
export const publishMessage = pubsubService.publishMessage;
export const triggerEmailFunction = cloudFunctionsService.triggerEmailFunction;
export const fetchUserData = dataIngestionService.fetchUserData;
export const updateUserData = dataIngestionService.updateUserData;
export const fetchReportData = dataIngestionService.fetchReportData;
export const createReport = dataIngestionService.createReport;
