import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { authenticateWithYouTube, getYouTubeData } from '../youtubeService';

const mock = new MockAdapter(axios);

describe('youtubeService', () => {
  it('should authenticate with YouTube', async () => {
    mock.onPost('/youtube/authenticate').reply(200, {
      // Example YouTube authentication response
    });

    const youtubeResponse = await authenticateWithYouTube();
    expect(youtubeResponse).toBeDefined();
  });

  it('should get YouTube data', async () => {
    const accessToken = 'testAccessToken';
    mock.onGet(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${accessToken}`).reply(200, {
      // Example YouTube data
    });

    const youtubeData = await getYouTubeData(accessToken);
    expect(youtubeData).toBeDefined();
  });
});
