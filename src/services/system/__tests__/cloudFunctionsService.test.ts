import { triggerEmailFunction } from '../cloudFunctionsService';
import { CloudFunctions } from '@google-cloud/functions';

jest.mock('@google-cloud/functions');

describe('cloudFunctionsService', () => {
  it('should trigger an email function', async () => {
    const mockFunctionName = 'sendWelcomeEmail';
    const mockData = { email: 'test@example.com', subject: 'Welcome', message: 'Hello!' };
    (CloudFunctions as jest.Mock).mockReturnValue({
      function: jest.fn().mockReturnValue({
        (data: any) => Promise.resolve(),
      }),
    });

    await triggerEmailFunction(mockData.email, mockData.subject, mockData.message);
    expect(CloudFunctions.function).toHaveBeenCalledWith(mockFunctionName);
    expect(CloudFunctions.function().mock.calls[0][0]).toEqual(mockData);
  });
});
