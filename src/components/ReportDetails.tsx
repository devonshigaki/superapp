import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReportDetails = () => {
  const navigation = useNavigation();
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleSaveReport = () => {
    // Save the report data to the database
    // ...
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Report</Text>

      <TextInput
        style={styles.input}
        placeholder="Report Title"
        value={reportTitle}
        onChangeText={setReportTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Report Content"
        value={reportContent}
        onChangeText={setReportContent}
        multiline
      />

      <Button title="Save Report" onPress={handleSaveReport} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ReportDetails;
