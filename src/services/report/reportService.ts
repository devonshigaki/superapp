import firestore from '@react-native-firebase/firestore';
import { calculateBlockScore } from '../blockchain/blockchainService';
import { fetchReport, updateReportScore, fetchFlaggedItems, confirmItem, updateReportWithAchievement } from './reportService.js';

export const fetchReportData = async (reportId: string) => {
  const reportRef = firestore().collection('reports').doc(reportId);
  const report = await reportRef.get();
  return report.data() as ReportData;
};

export const updateReportData = async (reportId: string, data: ReportData) => {
  const reportRef = firestore().collection('reports').doc(reportId);
  await reportRef.update(data);
};

export const calculateReportScore = async (reportId: string) => {
  const reportData = await fetchReportData(reportId);
  const blockScore = await calculateBlockScore(reportData);
  return blockScore;
};

export const updateReportWithAchievement = async (userId: string, achievement: string) => {
  // Implement logic to update the report with an achievement
  console.log('Updating report with achievement:', userId, achievement);
};
