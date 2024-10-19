import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchPersonalizedOffers } from '../services/offer/offerService';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadOffers = async () => {
      const userId = 'YOUR_USER_ID'; // Replace with your actual user ID
      const userOffers = await fetchPersonalizedOffers(userId);
      setOffers(userOffers);
    };
    loadOffers();
  }, []);

  const applyOffer = async (offerId: string) => {
    // Implement logic to apply the offer
    console.log('Applying offer:', offerId);
  };

  return (
    <View>
      <Text>Personalized Offers:</Text>
      {offers.map((offer, index) => (
        <View key={index}>
          <Text>{offer.description}</Text>
          <Button title="Apply" onPress={() => applyOffer(offer.id)} />
        </View>
      ))}
    </View>
  );
};

export default Offers;
