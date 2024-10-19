import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getInstagramData } from '../instagramService';

const mock = new MockAdapter(axios);

describe('instagramService', () => {
  it('should get Instagram data', async () => {
    mock.onGet('/instagram/data').reply(200, {
      // Example Instagram data
    });

    const instagramData = await getInstagramData();
    expect(instagramData).toBeDefined();
  });
});
