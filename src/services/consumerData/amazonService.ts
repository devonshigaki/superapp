import axios from 'axios';

export const getAmazonData = async (accessToken: string) => {
  try {
    const response = await axios.get('https://api.amazon.com/some-endpoint', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Amazon data:', error);
    throw error;
  }
};
