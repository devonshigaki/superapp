import { Report } from '../../models/Report';
import { firestore } from '../../database/database';

export const createReportData = async (reportData: Report): Promise<Report> => {
  const reportRef = firestore.collection('reports').doc();
  await reportRef.set(reportData);
  return { ...reportData, id: reportRef.id };
};

export const fetchReportDataFirestore = async (reportId: string): Promise<Report | null> => {
  const reportRef = firestore.collection('reports').doc(reportId);
  const reportSnapshot = await reportRef.get();
  if (reportSnapshot.exists) {
    return { ...reportSnapshot.data(), id: reportSnapshot.id };
  }
  return null;
};

export const updateReportDataFirestore = async (reportId: string, reportData: Report): Promise<Report | null> => {
  const reportRef = firestore.collection('reports').doc(reportId);
  await reportRef.update(reportData);
  const updatedReportSnapshot = await reportRef.get();
  if (updatedReportSnapshot.exists) {
    return { ...updatedReportSnapshot.data(), id: updatedReportSnapshot.id };
  }
  return null;
};
