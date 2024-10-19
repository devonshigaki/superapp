import { getPlaidAccessToken, getPlaidTransactions } from '../../../services/plaid/plaidService';
import { apiService } from '../../../services/apiService';

jest.mock('../../../services/apiService');

describe('Plaid Service', () => {
  it('should get Plaid access token', async () => {
    const publicToken = 'testPublicToken';
    const mockAccessToken = 'testAccessToken';
    (apiService.getPlaidAccessToken as jest.Mock).mockResolvedValue(mockAccessToken);
    const accessToken = await getPlaidAccessToken(publicToken);
    expect(accessToken).toBe(mockAccessToken);
  });

  it('should get Plaid transactions', async () => {
    const accessToken = 'testAccessToken';
    const startDate = '2023-01-01';
    const endDate = '2023-01-31';
    const mockTransactions = [{
      name: 'Test Transaction',
      amount: 100,
    }];
    (apiService.getPlaidTransactions as jest.Mock).mockResolvedValue(mockTransactions);
    const transactions = await getPlaidTransactions(accessToken, startDate, endDate);
    expect(transactions).toEqual(mockTransactions);
  });
});
