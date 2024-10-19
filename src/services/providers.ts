import { Provider } from '../models/Provider';
import { firestore } from '../database/database';

export const createProvider = async (providerData: Provider): Promise<Provider> => {
  const providerRef = firestore.collection('providers').doc();
  await providerRef.set(providerData);
  return { ...providerData, id: providerRef.id };
};
