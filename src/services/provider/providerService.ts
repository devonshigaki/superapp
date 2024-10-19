import firestore from '@react-native-firebase/firestore';
import { calculateBlockScore } from '../blockchain/blockchainService';

export const fetchProviderData = async (providerId: string) => {
  const providerRef = firestore().collection('providers').doc(providerId);
  const provider = await providerRef.get();
  return provider.data() as ProviderData;
};

export const updateProviderData = async (providerId: string, data: ProviderData) => {
  const providerRef = firestore().collection('providers').doc(providerId);
  await providerRef.update(data);
};

export const calculateProviderScore = async (providerId: string) => {
  const providerData = await fetchProviderData(providerId);
  const blockScore = await calculateBlockScore(providerData);
  return blockScore;
};
