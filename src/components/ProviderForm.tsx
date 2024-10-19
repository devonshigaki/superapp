import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProviderForm = () => {
  const navigation = useNavigation();
  const [providerName, setProviderName] = useState('');
  const [providerDescription, setProviderDescription] = useState('');

  const handleSaveProvider = () => {
    // Save the provider data to the database
    // ...
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Provider</Text>

      <TextInput
        style={styles.input}
        placeholder="Provider Name"
        value={providerName}
        onChangeText={setProviderName}
      />

      <TextInput
        style={styles.input}
        placeholder="Provider Description"
        value={providerDescription}
        onChangeText={setProviderDescription}
        multiline
      />

      <Button title="Save Provider" onPress={handleSaveProvider} />
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

export default ProviderForm;
