import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerifyEmail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>
      {/* ... Verify email content ... */}
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

export default VerifyEmail;
