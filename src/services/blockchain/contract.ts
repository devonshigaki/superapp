import { ethers } from 'ethers';

const contractAddress = '0xYOUR_CONTRACT_ADDRESS'; // Replace with your actual contract address
const contractAbi = [
  // Replace with your actual contract ABI
];

export const contract = new ethers.Contract(contractAddress, contractAbi, provider);
