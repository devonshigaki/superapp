import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPersonalizedOffers, filterNoise } from '../consumerAiService';

const mock = new MockAdapter(axios);

describe('consumerAiService', () => {
  it('should fetch personalized offers', async () => {
    mock.onPost('/ai/offers').reply(200, {
      offers: [
        // Example offer data
      ],
    });

    const offers = await fetchPersonalizedOffers();
    expect(offers).toBeDefined();
  });

  it('should filter noise from data', () => {
    const data = [
      { relevanceScore: 0.8 },
      { relevanceScore: 0.2 },
      { relevanceScore: 0.6 },
    ];

    const filteredData = filterNoise(data);
    expect(filteredData).toEqual([
      { relevanceScore: 0.8 },
      { relevanceScore: 0.6 },
    ]);
  });
});
