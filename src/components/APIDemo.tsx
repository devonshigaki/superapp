import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { apiService } from '../services/system/apiService';
import { announceForAccessibility } from '../utils/accessibility';

const APIDemo = () => {
  const navigation = useNavigation();
  const [plaidData, setPlaidData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handlePlaidConnection = async () => {
    try {
      const publicToken = 'YOUR_PLAID_PUBLIC_TOKEN'; // Replace with your actual Plaid public token
      const accessToken = await apiService.getPlaidAccessToken(publicToken);
      const transactions = await apiService.getPlaidTransactions(accessToken, '2023-01-01', '2023-01-31');
      setPlaidData(transactions);
    } catch (error) {
      console.error('Error connecting to Plaid:', error);
    }
  };

  const handleSocialMediaConnection = async () => {
    try {
      // Implement your social media connection logic here
      // ...
      setSocialData(socialData);
    } catch (error) {
      console.error('Error connecting to social media:', error);
    }
  };

  const handleReportCreation = async () => {
    try {
      const userData = {
        // ... user data
      };
      const createdReport = await apiService.createReport(userData);
      setReportData(createdReport);
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Demo</Text>
      <Button title="Connect to Plaid" onPress={handlePlaidConnection} />
      {plaidData && <Text>Plaid Data: {JSON.stringify(plaidData)}</Text>}
      <Button title="Connect to Social Media" onPress={handleSocialMediaConnection} />
      {socialData && <Text>Social Media Data: {JSON.stringify(socialData)}</Text>}
      <Button title="Create Report" onPress={handleReportCreation} />
      {reportData && <Text>Report Data: {JSON.stringify(reportData)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default APIDemo;
