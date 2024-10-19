import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ReportDetails = () => {
  const route = useRoute();
  const report = route.params.report;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Details</Text>

      <View style={styles.reportItem}>
        <Text style={styles.reportText}>ID: {report.id}</Text>
        <Text style={styles.reportText}>Status: {report.status}</Text>
        {report.score && <Text style={styles.reportText}>Score: {report.score}</Text>}
        {/* Display other report details here */}
      </View>
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

export default ReportDetails;
