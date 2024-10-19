import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlockchainDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blockchain Demo</Text>
      {/* ... Blockchain demo content ... */}
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

export default BlockchainDemo;
