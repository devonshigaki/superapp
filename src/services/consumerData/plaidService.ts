import axios from 'axios';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import { PLAID_CLIENT_ID, PLAID_SECRET } from '@env';

const plaidClient = new PlaidApi(new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
    },
  },
}));

export const getPlaidAccessToken = async (publicToken: string): Promise<string> => {
  try {
    const response = await plaidClient.itemPublicTokenExchange({ public_token: publicToken });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Plaid access token:', error);
    throw error;
  }
};

export const getPlaidTransactions = async (accessToken: string, startDate: string, endDate: string): Promise<any[]> => {
  try {
    const response = await plaidClient.transactionsGet({
      start_date: startDate,
      end_date: endDate,
      access_token: accessToken,
    });
    return response.data.transactions;
  } catch (error) {
    console.error('Error getting Plaid transactions:', error);
    throw error;
  }
};
