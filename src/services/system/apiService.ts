import axios from 'axios';
import * as plaidService from './plaidService';
import * as facebookService from './facebookService';
import * as instagramService from './instagramService';
import * as amazonService from './amazonService';
import * as youtubeService from './youtubeService';
import * as stripeService from './stripeService';
import * as pubsubService from './pubsubService';
import * as cloudFunctionsService from './cloudFunctionsService';
import { API_BASE_URL } from '@env';

const API_BASE_URL = 'https://api.freshcredit.com'; // Replace with your actual API base URL

export const getPlaidAccessToken = plaidService.getPlaidAccessToken;
export const getPlaidTransactions = plaidService.getPlaidTransactions;
export const getFacebookData = facebookService.getFacebookData;
export const getInstagramData = instagramService.getInstagramData;
export const authenticateWithAmazon = amazonService.authenticateWithAmazon;
export const authenticateWithYouTube = youtubeService.authenticateWithYouTube;
export const createStripeCheckoutSession = stripeService.createStripeCheckoutSession;
export const publishMessage = pubsubService.publishMessage;
export const triggerEmailFunction = cloudFunctionsService.triggerEmailFunction;

export const fetchUserData = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const updateUserData = async (userId: string, data: any) => {
  const response = await axios.put(`${API_BASE_URL}/users/${userId}`, data);
  return response.data;
};

export const fetchReportData = async (reportId: string) => {
  const response = await axios.get(`${API_BASE_URL}/reports/${reportId}`);
  return response.data;
};

export const createReport = async (userData: any) => {
  const response = await axios.post(`${API_BASE_URL}/reports`, userData);
  return response.data;
};

export const publishReportData = async (reportData: any) => {
  try {
    const topicName = 'freshcredit-reports'; // Replace with your actual topic name
    const dataBuffer = Buffer.from(JSON.stringify(reportData));
    const [messageIds] = await pubsubService.publishMessage(topicName, dataBuffer);
    console.log(`Message ${messageIds} published.`);
  } catch (error) {
    console.error('Error publishing report data:', error);
    throw error;
  }
};
