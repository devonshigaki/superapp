import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fetchPageContent } from '../services/cmsService';
import { announceForAccessibility } from '../utils/accessibility';

const CMSPage = ({ pageId }: { pageId: string }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const pageContent = await fetchPageContent(pageId);
      setContent(pageContent);
    };
    loadContent();
  }, [pageId]);

  if (!content) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.body}>{content.body}</Text>
    </ScrollView >
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
  body: {
    fontSize: 16,
  },
});

export default CMSPage;
