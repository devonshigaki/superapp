import { User } from '../../models/User';
import { firestore } from '../../database/database';

export const createUser = async (userData: User): Promise<User> => {
  const userRef = firestore.collection('users').doc();
  await userRef.set(userData);
  return { ...userData, id: userRef.id };
};

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userRef = firestore.collection('users').doc(userId);
  const userDoc = await userRef.get();
  if (userDoc.exists) {
    return { ...userDoc.data(), id: userId };
  }
  return null;
};

export const updateUserData = async (userId: string, userData: User): Promise<User | null> => {
  const userRef = firestore.collection('users').doc(userId);
  await userRef.update(userData);
  return { ...userData, id: userId };
};
