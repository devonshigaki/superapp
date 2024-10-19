import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export const fetchUserData = async (userId: string): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};
