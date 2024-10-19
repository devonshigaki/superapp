import axios from 'axios';
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '@env';

const FACEBOOK_GRAPH_API_URL = 'https://graph.facebook.com/v14.0';

export const getFacebookData = async (accessToken: string) => {
  try {
    const response = await axios.get(`${FACEBOOK_GRAPH_API_URL}/me?fields=id,name,email,picture&access_token=${accessToken}`);
    return response.data;
  } catch (error) {
    console.error('Error getting Facebook data:', error);
    throw error;
  }
};
