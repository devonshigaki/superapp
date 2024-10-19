import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const ReportPreferences = () => {
  const [dataSources, setDataSources] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);

  const handleSavePreferences = () => {
    // Save selected data sources to user preferences
    console.log('Selected data sources:', selectedSources);
  };

  return (
    <View>
      <Text>Select Data Sources</Text>
      {dataSources.map((source, index) => (
        <View key={index}>
          <Text>{source.name}</Text>
          <Button
            title={selectedSources.includes(source.id) ? 'Remove' : 'Add'}
            onPress={() => {
              if (selectedSources.includes(source.id)) {
                setSelectedSources(selectedSources.filter(id => id !== source.id));
              } else {
                setSelectedSources([...selectedSources, source.id]);
              }
            }}
          />
        </View>
      ))}
      <Button title="Save Preferences" onPress={handleSavePreferences} />
    </View>
  );
};

export default ReportPreferences;
