import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ReportProps {
  report: any;
}

const ReportCard = ({ report }: ReportProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ReportDetails', { reportId: report.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>Report ID: {report.id}</Text>
      <Text style={styles.subtitle}>Score: {report.score}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default ReportCard;
