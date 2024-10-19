import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface OfferProps {
  offer: any;
}

const OfferCard = ({ offer }: OfferProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('OfferDetails', { offerId: offer.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{offer.description}</Text>
      <Text style={styles.subtitle}>Criteria: {offer.criteria}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default OfferCard;
