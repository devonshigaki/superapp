import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getFacebookData } from '../facebookService';

const mock = new MockAdapter(axios);

describe('facebookService', () => {
  it('should get Facebook data', async () => {
    mock.onGet('/facebook/data').reply(200, {
      // Example Facebook data
    });

    const facebookData = await getFacebookData();
    expect(facebookData).toBeDefined();
  });
});
