import { getYouTubeData } from '../../../services/system/youtubeService';
import { youtubeService } from '../../../services/system/youtubeService';

jest.mock('../../../services/system/youtubeService');

describe('YouTube Service', () => {
  it('should get YouTube data', async () => {
    const videoId = 'testVideoId';
    const mockYouTubeData = {
      title: 'Test Video',
      description: 'Test video description',
    };
    (youtubeService.getVideoInfo as jest.Mock).mockResolvedValue(mockYouTubeData);
    const youtubeData = await getYouTubeData(videoId);
    expect(youtubeData).toEqual(mockYouTubeData);
  });
});
