import axios from 'axios';
import { AMAZON_CLIENT_ID, AMAZON_CLIENT_SECRET } from '@env';

const API_BASE_URL = 'https://api.amazon.com/user/profile'; // Replace with your actual Amazon API base URL

export const authenticateWithAmazon = async (code: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/authenticate`, {
      code,
      client_id: AMAZON_CLIENT_ID,
      client_secret: AMAZON_CLIENT_SECRET,
    });
    return response.data;
  } catch (error) {
    console.error('Error authenticating with Amazon:', error);
    throw error;
  }
};
