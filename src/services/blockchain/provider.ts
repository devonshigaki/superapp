import { ethers } from 'ethers';

const rpcUrl = 'https://rpc-mumbai.maticvigil.com'; // Replace with your actual RPC URL

export const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
