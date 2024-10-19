import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FAQ = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
      {/* ... FAQ content ... */}
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

export default FAQ;
