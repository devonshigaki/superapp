import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPersonalizedOffers } from '../aiService';

const mock = new MockAdapter(axios);

describe('aiService', () => {
  it('should fetch personalized offers', async () => {
    mock.onPost('/ai/offers').reply(200, {
      offers: [
        // Example offer data
      ],
    });

    const offers = await fetchPersonalizedOffers();
    expect(offers).toBeDefined();
  });
});
