import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchReports, validateReport, createOffer } from '../services/providerService';
import { fetchUserData } from '../services/userService';
import { fetchPersonalizedOffers } from '../services/ai/aiService';
import { announceForAccessibility } from '../utils/accessibility';

const Home = () => {
  const navigation = useNavigation();
  const [reports, setReports] = useState([]);
  const [offers, setOffers] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadReports = async () => {
      const reports = await fetchReports();
      setReports(reports);
    };
    loadReports();
  }, []);

  useEffect(() => {
    const loadUserData = async () => {
      const userId = 'YOUR_USER_ID'; // Replace with actual user ID
      const fetchedUserData = await fetchUserData(userId);
      setUserData(fetchedUserData);
    };
    loadUserData();
  }, []);

  useEffect(() => {
    const loadOffers = async () => {
      if (userData) {
        const offers = await fetchPersonalizedOffers(userData);
        setOffers(offers);
      }
    };
    loadOffers();
  }, [userData]);

  const handleCreateReport = async () => {
    // Implement report creation logic here
    // Example:
    const report = {
      // ... report data
    };
    await createReport(report);
    setReports(prev => [...prev, report]);
  };

  const handleValidateReport = async (reportId: string) => {
    const validatedReport = await validateReport(reportId);
    setReports(prev => prev.map(report => 
      report.id === reportId ? validatedReport : report
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FreshCredit</Text>
      <Text style={styles.subtitle}>Your Personalized Dashboard</Text>
      <View style={styles.reportsContainer}>
        <Text style={styles.sectionTitle}>Your Reports</Text>
        {/* Add a FlatList to display reports here */}
      </View>
      <View style={styles.offersContainer}>
        <Text style={styles.sectionTitle}>Personalized Offers</Text>
        {/* Add a FlatList to display offers here */}
      </View>
      <Button title="Create Report" onPress={handleCreateReport} />
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
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  reportsContainer: {
    marginBottom: 20,
  },
  offersContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
