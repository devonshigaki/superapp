import { calculateBlockScore } from '../../blockchain/blockchainService';

describe('Blockchain Service', () => {
  it('should calculate block score', async () => {
    const blockchainRecord = {
      reportHash: 'testReportHash',
      blockScore: 100,
    };
    const blockScore = await calculateBlockScore(blockchainRecord);
    expect(blockScore).toBe(100);
  });
});
