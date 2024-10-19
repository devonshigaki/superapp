import axios from 'axios';
import { INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET } from '@env';

const API_BASE_URL = 'https://api.instagram.com/v1'; // Replace with your actual Instagram API base URL

export const getInstagramData = async (accessToken: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/self/?access_token=${accessToken}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw error;
  }
};
