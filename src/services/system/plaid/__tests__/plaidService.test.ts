import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getPlaidAccessToken, getPlaidTransactions } from '../plaidService';

const mock = new MockAdapter(axios);

describe('plaidService', () => {
  it('should get Plaid access token', async () => {
    mock.onPost('/plaid/token').reply(200, {
      access_token: 'testAccessToken',
    });

    const accessToken = await getPlaidAccessToken();
    expect(accessToken).toEqual('testAccessToken');
  });

  it('should get Plaid transactions', async () => {
    mock.onGet('/plaid/transactions').reply(200, {
      transactions: [
        // Example transaction data
      ],
    });

    const transactions = await getPlaidTransactions();
    expect(transactions).toBeDefined();
  });
});
