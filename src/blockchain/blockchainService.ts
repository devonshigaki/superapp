import { BlockchainRecord } from '../database/firestoreService';
import { initBlockchain, hashReport, validateHash, storeHashOnBlockchain, calculateBlockScore } from './blockchainService.js';

export const calculateBlockScore = async (reportData: any) => {
  const blockchain = await initBlockchain();
  return blockchain.calculate_block_score(JSON.stringify(reportData));
};
