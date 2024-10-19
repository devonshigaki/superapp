import { fetchCMSContent, createCMSContent, uploadMedia } from '../cmsService';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

jest.mock('@react-native-firebase/firestore');
jest.mock('@react-native-firebase/storage');

describe('cmsService', () => {
  it('should fetch CMS content', async () => {
    const mockData = [{ title: 'Test Content' }];
    (firestore().collection as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({
        docs: mockData.map(doc => ({ data: jest.fn().mockReturnValue(doc) })),
      }),
    });

    const content = await fetchCMSContent('test-content-type');
    expect(content).toEqual(mockData);
  });

  it('should create CMS content', async () => {
    const mockContent = { title: 'New Content' };
    (firestore().collection as jest.Mock).mockReturnValue({
      add: jest.fn().mockResolvedValue({ id: 'test-id' }),
    });

    const result = await createCMSContent('test-content-type', mockContent);
    expect(result).toEqual('test-id');
  });

  it('should upload media', async () => {
    const mockFile = { name: 'test.jpg' };
    const mockPath = 'test/path/to/file.jpg';
    (storage().ref as jest.Mock).mockReturnValue({
      putFile: jest.fn().mockResolvedValue(undefined),
      getDownloadURL: jest.fn().mockResolvedValue('https://test.com/file.jpg'),
    });

    const url = await uploadMedia(mockFile, mockPath);
    expect(url).toEqual('https://test.com/file.jpg');
  });
});
