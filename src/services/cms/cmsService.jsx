import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const fetchMenuItems = async () => {
  try {
    const snapshot = await firestore().collection('menu').get();
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const fetchPageContent = async (pageId: string) => {
  try {
    const doc = await firestore().collection('pages').doc(pageId).get();
    return doc.data();
  } catch (error) {
    console.error('Error fetching page content:', error);
    throw error;
  }
};

export const updatePageContent = async (pageId: string, content: any) => {
  try {
    await firestore().collection('pages').doc(pageId).update(content);
  } catch (error) {
    console.error('Error updating page content:', error);
    throw error;
  }
};

export const uploadMedia = async (file: any, path: string) => {
  try {
    const reference = storage().ref(path);
    await reference.putFile(file);
    return await reference.getDownloadURL();
  } catch (error) {
    console.error('Error uploading media:', error);
    throw error;
  }
};
