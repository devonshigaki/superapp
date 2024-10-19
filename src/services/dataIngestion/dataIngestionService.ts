import axios from 'axios';
import { firestore } from '../../database/firestoreService';

const API_BASE_URL = process.env.API_BASE_URL;

export const fetchUserData = async (userId: string): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const updateUserData = async (userId: string, data: any): Promise<any> => {
  const response = await axios.put(`${API_BASE_URL}/users/${userId}`, data);
  return response.data;
};

export const fetchReportData = async (reportId: string): Promise<any> => {
  const reportRef = firestore().collection('reports').doc(reportId);
  const report = await reportRef.get();
  return report.data() as any; // Assuming report data is of type any
};

export const createReport = async (reportData: any): Promise<string> => {
  const reportRef = firestore().collection('reports').add(reportData);
  return reportRef.id;
};

export const publishReportData = async (reportData: any): Promise<void> => {
  try {
    const topicName = 'freshcredit-reports'; // Replace with your actual topic name
    const dataBuffer = Buffer.from(JSON.stringify(reportData));
    const [messageIds] = await publishMessage(topicName, dataBuffer);
    console.log(`Message ${messageIds} published.`);
  } catch (error) {
    console.error('Error publishing report data:', error);
    throw error;
  }
};
