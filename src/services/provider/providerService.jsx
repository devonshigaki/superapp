import axios from 'axios';

const API_BASE_URL = 'http://backend:3001'; // Replace with your actual API base URL

export const fetchReports = async () => {
  const response = await axios.get(`${API_BASE_URL}/reports`);
  return response.data;
};

export const validateReport = async (reportId: string) => {
  const response = await axios.put(`${API_BASE_URL}/reports/${reportId}/validate`);
  return response.data;
};

export const createOffer = async (offer: any) => {
  const response = await axios.post(`${API_BASE_URL}/offers`, offer);
  return response.data;
};
