import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const fetchCMSContent = async (contentType: string) => {
  try {
    const snapshot = await firestore().collection(contentType).get();
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching CMS content:', error);
    throw error;
  }
};

export const createCMSContent = async (contentType: string, content: any) => {
  try {
    await firestore().collection(contentType).add(content);
  } catch (error) {
    console.error('Error creating CMS content:', error);
    throw error;
  }
};

export const updateCMSContent = async (contentType: string, contentId: string, content: any) => {
  try {
    await firestore().collection(contentType).doc(contentId).update(content);
  } catch (error) {
    console.error('Error updating CMS content:', error);
    throw error;
  }
};

export const deleteCMSContent = async (contentType: string, contentId: string) => {
  try {
    await firestore().collection(contentType).doc(contentId).delete();
  } catch (error) {
    console.error('Error deleting CMS content:', error);
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
