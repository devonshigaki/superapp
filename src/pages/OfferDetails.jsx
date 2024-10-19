import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const OfferDetails = () => {
  const route = useRoute();
  const offer = route.params.offer;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offer Details</Text>

      <View style={styles.offerItem}>
        <Text style={styles.offerText}>Offer ID: {offer.id}</Text>
        <Text style={styles.offerText}>Offer Details: {offer.details}</Text>
        {/* Display other offer details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offerItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  offerText: {
    marginBottom: 5,
  },
});

export default OfferDetails;
