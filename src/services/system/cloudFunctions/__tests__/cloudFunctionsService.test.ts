import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { triggerEmailFunction } from '../cloudFunctionsService';

const mock = new MockAdapter(axios);

describe('cloudFunctionsService', () => {
  it('should trigger an email function', async () => {
    mock.onPost('/cloudfunctions/email').reply(200, {
      // Example Cloud Functions email response
    });

    const cloudFunctionsResponse = await triggerEmailFunction();
    expect(cloudFunctionsResponse).toBeDefined();
  });
});
