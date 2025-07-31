import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

const SurahScreen = ({ route }) => {
  const { surahName, surahLink } = route.params;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(surahLink);
        const data = await response.json();
        setVerses(data.verses || []);
      } catch (error) {
        console.error('Failed to fetch surah:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [surahLink]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{surahName}</Text>
      {verses.map((verse) => (
        <View key={verse.id} style={styles.verseContainer}>
          <Text style={styles.arabic}>{verse.text}</Text>
          <Text style={styles.transliteration}>{verse.transliteration}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
  verseContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 8,
  },
  arabic: {
    fontSize: 22,
    textAlign: 'right',
    lineHeight: 34,
    marginBottom: 6,
  },
  transliteration: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});

export default SurahScreen;