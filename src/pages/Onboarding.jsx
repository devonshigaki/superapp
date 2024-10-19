import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authenticateWithPlaid, authenticateWithFacebook, authenticateWithAmazon, authenticateWithYouTube } from '../services/authService';
import { announceForAccessibility } from '../utils/accessibility';

const Onboarding = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async (service: string) => {
    setIsLoading(true);
    try {
      switch (service) {
        case 'plaid':
          await authenticateWithPlaid();
          break;
        case 'facebook':
          await authenticateWithFacebook();
          break;
        case 'amazon':
          await authenticateWithAmazon();
          break;
        case 'youtube':
          await authenticateWithYouTube();
          break;
        default:
          console.error('Invalid service:', service);
      }
      announceForAccessibility(`Connected to ${service}`);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error connecting to service:', error);
      announceForAccessibility('Error connecting to service');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Connect Bank Account" onPress={() => handleConnect('plaid')} disabled={isLoading} />
      <Button title="Connect Facebook" onPress={() => handleConnect('facebook')} disabled={isLoading} />
      <Button title="Connect Amazon" onPress={() => handleConnect('amazon')} disabled={isLoading} />
      <Button title="Connect YouTube" onPress={() => handleConnect('youtube')} disabled={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
