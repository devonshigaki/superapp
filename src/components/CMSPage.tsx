import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { fetchPageContent } from '../services/internal/cmsService';
import { announceForAccessibility } from '../utils/accessibility';

const CMSPage = ({ pageId }: { pageId: string }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const fetchedContent = await fetchPageContent(pageId);
      setContent(fetchedContent);
    };
    loadContent();
  }, [pageId]);

  return (
    <View style={styles.container}>
      {content && (
        <ScrollView>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.body}>{content.body}</Text>
        </ScrollView>
      )}
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
  body: {
    fontSize: 16,
  },
});

export default CMSPage;
