let wasmModule = null;

export const initBlockchain = async () => {
  if (!wasmModule) {
    const module = await import('../blockchain/freshcredit_blockchain/pkg');
    wasmModule = await module.default();
  }
  return wasmModule;
};

export const hashReport = async (report: string) => {
  const blockchain = await initBlockchain();
  return blockchain.hash_report(JSON.stringify(report));
};

export const validateHash = async (hash: string) => {
  const blockchain = await initBlockchain();
  return blockchain.validate_hash(hash);
};

export const storeHashOnBlockchain = async (hash: string) => {
  const blockchain = await initBlockchain();
  return blockchain.store_hash_on_blockchain(hash);
};

export const calculateBlockScore = async (reportData: any) => {
  const blockchain = await initBlockchain();
  return blockchain.calculate_block_score(JSON.stringify(reportData));
};
