// src/screens/SurahScreen.tsx

import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RootStackParamList } from '../../App';

type SurahScreenRouteProp = RouteProp<RootStackParamList, 'Surah'>;

type Props = {
  route: SurahScreenRouteProp;
};

type Verse = {
  id: number;
  text: string;
  transliteration: string;
};

const SurahScreen = ({ route }: Props) => {
  const { surahName, surahLink } = route.params;
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(surahLink);
        const data = await response.json();
        setVerses(data.verses as Verse[]);
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
    marginBottom: 16,
  },
  verseContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  arabic: {
    fontSize: 22,
    textAlign: 'right',
    marginBottom: 4,
    lineHeight: 32,
  },
  transliteration: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
  },
});

export default SurahScreen;