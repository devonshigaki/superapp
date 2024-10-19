import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const fetchCMSContent = async (contentType) => {
  const snapshot = await firestore().collection(contentType).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateCMSContent = async (contentType, id, data) => {
  await firestore().collection(contentType).doc(id).update(data);
};

export const uploadMedia = async (file, path) => {
  const reference = storage().ref(path);
  await reference.putFile(file);
  return await reference.getDownloadURL();
};

export const fetchDynamicNavigation = async () => {
  const snapshot = await firestore().collection('navigation').get();
  return snapshot.docs.map(doc => doc.data());
};
