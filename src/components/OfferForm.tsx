import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OfferForm = () => {
  const navigation = useNavigation();
  const [offerTitle, setOfferTitle] = useState('');
  const [offerContent, setOfferContent] = useState('');

  const handleSaveOffer = () => {
    // Save the offer data to the database
    // ...
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Offer</Text>

      <TextInput
        style={styles.input}
        placeholder="Offer Title"
        value={offerTitle}
        onChangeText={setOfferTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Offer Content"
        value={offerContent}
        onChangeText={setOfferContent}
        multiline
      />

      <Button title="Save Offer" onPress={handleSaveOffer} />
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default OfferForm;
