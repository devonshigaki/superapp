import axios from 'axios';
import { YOUTUBE_CLIENT_ID, YOUTUBE_CLIENT_SECRET } from '@env';

const YOUTUBE_AUTH_URL = 'https://accounts.google.com/o/oauth2/token';

export const authenticateWithYouTube = async (code: string) => {
  try {
    const response = await axios.post(YOUTUBE_AUTH_URL, {
      code,
      client_id: YOUTUBE_CLIENT_ID,
      client_secret: YOUTUBE_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'your_redirect_uri', // Replace with your actual redirect URI
    });
    return response.data;
  } catch (error) {
    console.error('Error authenticating with YouTube:', error);
    throw error;
  }
};
