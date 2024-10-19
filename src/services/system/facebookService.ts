import axios from 'axios';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '@env';

const API_BASE_URL = 'https://graph.facebook.com/v13.0'; // Replace with your actual Facebook Graph API base URL

export const getFacebookData = async (accessToken: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/me?fields=id,name,email,picture.type(large)&access_token=${accessToken}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Facebook data:', error);
    throw error;
  }
};
