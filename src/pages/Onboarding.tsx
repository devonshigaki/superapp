import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authenticateWithPlaid, authenticateWithFacebook, authenticateWithAmazon, authenticateWithYouTube } from '../services/external/authService';
import { announceForAccessibility } from '../utils/accessibility';

const Onboarding = () => {
  const navigation = useNavigation();

  const handlePlaidAuthentication = async () => {
    try {
      await authenticateWithPlaid();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error authenticating with Plaid:', error);
    }
  };

  const handleFacebookAuthentication = async () => {
    try {
      await authenticateWithFacebook();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error authenticating with Facebook:', error);
    }
  };

  const handleAmazonAuthentication = async () => {
    try {
      await authenticateWithAmazon();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error authenticating with Amazon:', error);
    }
  };

  const handleYouTubeAuthentication = async () => {
    try {
      await authenticateWithYouTube();
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error authenticating with YouTube:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Connect with Plaid" onPress={handlePlaidAuthentication} />
      <Button title="Connect with Facebook" onPress={handleFacebookAuthentication} />
      <Button title="Connect with Amazon" onPress={handleAmazonAuthentication} />
      <Button title="Connect with YouTube" onPress={handleYouTubeAuthentication} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
