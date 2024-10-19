import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export const getPlaidAccessToken = async (publicToken: string): Promise<string> => {
  const response = await axios.get(`${API_BASE_URL}/plaid/accessToken?publicToken=${publicToken}`);
  return response.data.accessToken;
};

export const getPlaidTransactions = async (accessToken: string, startDate: string, endDate: string): Promise<any[]> => {
  const response = await axios.get(`${API_BASE_URL}/plaid/transactions?accessToken=${accessToken}&startDate=${startDate}&endDate=${endDate}`);
  return response.data;
};
