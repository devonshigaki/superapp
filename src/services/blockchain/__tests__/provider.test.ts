import { provider } from '../provider';

describe('provider', () => {
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  // Add more tests for specific provider methods
  // For example:
  // it('should get the current block number', async () => {
  //   const blockNumber = await provider.getBlockNumber();
  //   expect(blockNumber).toBeDefined();
  // });
});
