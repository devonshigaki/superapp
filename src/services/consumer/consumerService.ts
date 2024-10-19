import firestore from '@react-native-firebase/firestore';

export const fetchUserData = async (userId: string) => {
  const userRef = firestore().collection('consumers').doc(userId);
  const user = await userRef.get();
  return user.data() as any; // Assuming user data is of type any
};

export const updateUserData = async (userId: string, data: any) => {
  const userRef = firestore().collection('consumers').doc(userId);
  await userRef.update(data);
};
