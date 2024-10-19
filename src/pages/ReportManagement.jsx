import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchReports, createReport } from '../services/reportService';
import { announceForAccessibility } from '../utils/accessibility';

const ReportManagement = () => {
  const navigation = useNavigation();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const loadReports = async () => {
      const reports = await fetchReports();
      setReports(reports);
    };
    loadReports();
  }, []);

  const handleCreateReport = async () => {
    // Implement report creation logic here
    // Example:
    const report = {
      // ... report data
    };
    await createReport(report);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Management</Text>
      <Text style={styles.subtitle}>View and Manage Your Reports</Text>
      <Button title="Create Report" onPress={handleCreateReport} />
      <Text style={styles.sectionTitle}>Your Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportText}>ID: {item.id}</Text>
            <Text style={styles.reportText}>Status: {item.status}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('ReportDetails', { report: item })} />
          </View>
        )}
      />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reportItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  reportText: {
    marginBottom: 5,
  },
});

export default ReportManagement;
