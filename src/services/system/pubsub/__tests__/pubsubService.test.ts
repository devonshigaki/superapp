import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { publishMessage } from '../pubsubService';

const mock = new MockAdapter(axios);

describe('pubsubService', () => {
  it('should publish a message', async () => {
    mock.onPost('/pubsub/publish').reply(200, {
      // Example PubSub publish response
    });

    const pubsubResponse = await publishMessage();
    expect(pubsubResponse).toBeDefined();
  });
});
