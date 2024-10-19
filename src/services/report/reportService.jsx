import firestore from '@react-native-firebase/firestore';

export const fetchReports = async () => {
  const snapshot = await firestore().collection('reports').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createReport = async (report: any) => {
  await firestore().collection('reports').add(report);
};
