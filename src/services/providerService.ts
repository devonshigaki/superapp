import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export const fetchReports = async (): Promise<any[]> => {
  const response = await axios.get(`${API_BASE_URL}/reports`);
  return response.data;
};

export const validateReport = async (reportId: string): Promise<boolean> => {
  const response = await axios.get(`${API_BASE_URL}/reports/${reportId}/validate`);
  return response.data.isValid;
};

export const createProvider = async (providerData: any): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/providers`, providerData);
  return response.data;
};
