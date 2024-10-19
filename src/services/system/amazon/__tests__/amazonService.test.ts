import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { authenticateWithAmazon } from '../amazonService';

const mock = new MockAdapter(axios);

describe('amazonService', () => {
  it('should authenticate with Amazon', async () => {
    mock.onPost('/amazon/authenticate').reply(200, {
      // Example Amazon authentication response
    });

    const amazonResponse = await authenticateWithAmazon();
    expect(amazonResponse).toBeDefined();
  });
});
