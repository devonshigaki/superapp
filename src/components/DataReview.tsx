import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { fetchReportData } from '../services/report/reportService';

const DataReview = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const loadReportData = async () => {
      const reportId = 'YOUR_REPORT_ID'; // Replace with your actual report ID
      const data = await fetchReportData(reportId);
      setReportData(data);
    };
    loadReportData();
  }, []);

  return (
    <View>
      {reportData ? (
        <View>
          <Text>Report Data:</Text>
          <Text>Name: {reportData.name}</Text>
          <Text>Email: {reportData.email}</Text>
          {/* Display other report data fields */}
        </View>
      ) : (
        <Text>Loading report data...</Text>
      )}
    </View>
  );
};

export default DataReview;
