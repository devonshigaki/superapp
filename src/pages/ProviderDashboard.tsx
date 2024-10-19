import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProviderDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provider Dashboard</Text>
      {/* ... Provider dashboard content ... */}
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
});

export default ProviderDashboard;
