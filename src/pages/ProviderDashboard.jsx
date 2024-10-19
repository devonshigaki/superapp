import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { fetchReports, validateReport } from '../services/providerService';
import { announceForAccessibility } from '../utils/accessibility';

const ProviderDashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const loadReports = async () => {
      const fetchedReports = await fetchReports();
      setReports(fetchedReports);
    };
    loadReports();
  }, []);

  const handleValidate = async (reportId: string) => {
    const validatedReport = await validateReport(reportId);
    // Update the reports state with the validated report
    setReports(prevReports =>
      prevReports.map(report =>
        report.id === reportId ? validatedReport : report
      )
    );
  };

  const renderReportItem = ({ item }) => (
    <View style={styles.reportItem}>
      <Text style={styles.reportText}>Report ID: {item.id}</Text>
      <Text style={styles.reportText}>Status: {item.status}</Text>
      <Button title="Validate" onPress={() => handleValidate(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provider Dashboard</Text>
      <FlatList
        data={reports}
        renderItem={renderReportItem}
        keyExtractor={item => item.id}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  reportText: {
    marginBottom: 5,
  },
});

export default ProviderDashboard;
