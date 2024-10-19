import firestore from '@react-native-firebase/firestore';

export const fetchCourseData = async (courseId: string) => {
  const courseRef = firestore().collection('courses').doc(courseId);
  const course = await courseRef.get();
  return course.data() as any; // Assuming course data is of type any
};

export const updateCourseProgress = async (courseId: string, userId: string, progress: number) => {
  const userRef = firestore().collection('users').doc(userId);
  await userRef.update({
    [`courses.${courseId}.progress`]: progress,
  });
};

export const checkAndAwardAchievements = async (courseId: string, userId: string) => {
  const userRef = firestore().collection('users').doc(userId);
  const user = await userRef.get();
  const courseProgress = user.data().courses[courseId].progress;
  const courseData = await fetchCourseData(courseId);
  const achievements = courseData.achievements.filter(achievement => achievement.progress <= courseProgress);
  await userRef.update({
    [`courses.${courseId}.achievements`]: achievements,
  });
  return achievements;
};

export const sendAchievementNotification = async (userId: string, message: string) => {
  try {
    // Implement your notification logic here
    // ...
  } catch (error) {
    console.error('Error sending achievement notification:', error);
    throw error;
  }
};
