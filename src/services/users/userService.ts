import { User } from '../../models/User';
import { firestore } from '../../database/database';

export const createUser = async (userData: User): Promise<User> => {
  const userRef = firestore.collection('users').doc();
  await userRef.set(userData);
  return { ...userData, id: userRef.id };
};

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userRef = firestore.collection('users').doc(userId);
  const userSnapshot = await userRef.get();
  if (userSnapshot.exists) {
    return { ...userSnapshot.data(), id: userSnapshot.id };
  }
  return null;
};

export const updateUserData = async (userId: string, userData: User): Promise<User | null> => {
  const userRef = firestore.collection('users').doc(userId);
  await userRef.update(userData);
  const updatedUserSnapshot = await userRef.get();
  if (updatedUserSnapshot.exists) {
    return { ...updatedUserSnapshot.data(), id: updatedUserSnapshot.id };
  }
  return null;
};
