import axios from 'axios';
import { INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET } from '@env';

const INSTAGRAM_GRAPH_API_URL = 'https://graph.instagram.com';

export const getInstagramData = async (accessToken: string) => {
  try {
    const response = await axios.get(`${INSTAGRAM_GRAPH_API_URL}/me?fields=id,username,profile_picture&access_token=${accessToken}`);
    return response.data;
  } catch (error) {
    console.error('Error getting Instagram data:', error);
    throw error;
  }
};
