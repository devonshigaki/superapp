import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ProviderProps {
  provider: any;
}

const ProviderCard = ({ provider }: ProviderProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProviderDetails', { providerId: provider.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{provider.name}</Text>
      <Text style={styles.subtitle}>{provider.description}</Text>
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

export default ProviderCard;
