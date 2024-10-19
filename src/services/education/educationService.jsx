import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

export const updateProgress = (userId: string, progress: number) => {
  return firestore().collection('users').doc(userId).update({ progress });
};

export const listenToProgress = (userId: string, callback: (progress: number) => void) => {
  return firestore().collection('users').doc(userId).onSnapshot(doc => {
    callback(doc.data().progress);
  });
};

export const checkAndAwardAchievements = async (userId: string, action: { type: string }) => {
  const userRef = firestore().collection('users').doc(userId);
  const user = await userRef.get();
  const achievements = user.data().achievements || [];

  if (action.type === 'complete_tutorial' && !achievements.includes('tutorial_completed')) {
    achievements.push('tutorial_completed');
    await userRef.update({ achievements });
    sendAchievementNotification(userId, 'Congratulations! You completed the tutorial.');
  }

  // Add more achievement checks here
};

export const sendAchievementNotification = async (userId: string, message: string) => {
  const userToken = await messaging().getToken();
  // In a real app, you'd send this to your server to handle FCM
  console.log(`Sending notification to ${userToken}: ${message}`);
};
