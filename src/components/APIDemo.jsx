import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as apiService from '../services/apiService';
import CustomButton from '../components/CustomButton';
import { theme } from '../styles/theme';

const APIDemo = () => {
  const [plaidData, setPlaidData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handlePlaidConnection = async () => {
    try {
      // In a real app, you'd need to implement Plaid Link to get the public token
      const publicToken = 'test_public_token';
      const accessToken = await apiService.getPlaidAccessToken(publicToken);
      const transactions = await apiService.getPlaidTransactions(accessToken, '2023-01-01', '2023-12-31');
      setPlaidData(transactions);
    } catch (error) {
      console.error('Error connecting to Plaid:', error);
    }
  };

  const handleSocialConnection = async () => {
    try {
      // In a real app, you'd need to implement OAuth flows for these services
      const facebookData = await apiService.getFacebookData('test_facebook_token');
      const instagramData = await apiService.getInstagramData('test_instagram_token');
      const linkedInData = await apiService.getLinkedInData('test_linkedin_token');
      setSocialData({ facebook: facebookData, instagram: instagramData, linkedin: linkedInData });
    } catch (error) {
      console.error('Error connecting to social media:', error);
    }
  };

  const handleReportCreation = async () => {
    try {
      const userData = { userId: '123', name: 'John Doe', creditScore: 750 };
      const report = await apiService.createReport(userData);
      setReportData(report);
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Integration Demo</Text>
      <CustomButton title="Connect Plaid" onPress={handlePlaidConnection} />
      {plaidData && <Text>Plaid connected: {plaidData.length} transactions found</Text>}
      <CustomButton title="Connect Social Media" onPress={handleSocialConnection} />
      {socialData && <Text>Social media connected: {Object.keys(socialData).join(', ')}</Text>}
      <CustomButton title="Create Report" onPress={handleReportCreation} />
      {reportData && <Text>Report created: ID {reportData.id}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default APIDemo;
