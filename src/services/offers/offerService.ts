import { Offer } from '../../models/Offer';
import { firestore } from '../../database/database';

export const createOffer = async (offerData: Offer): Promise<Offer> => {
  const offerRef = firestore.collection('offers').doc();
  await offerRef.set(offerData);
  return { ...offerData, id: offerRef.id };
};

export const fetchPersonalizedOffers = async (userId: string): Promise<Offer[] | null> => {
  const offersRef = firestore.collection('offers').where('userId', '==', userId);
  const offersSnapshot = await offersRef.get();
  if (offersSnapshot.empty) {
    return null;
  }
  return offersSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};
