import axios from 'axios';

export const getLinkedInData = async (accessToken: string) => {
  try {
    const response = await axios.get(`https://api.linkedin.com/v2/me?oauth2_access_token=${accessToken}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    throw error;
  }
};
