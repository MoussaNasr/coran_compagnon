// src/screens/SurahListScreen.tsx

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../../App';
import surahList from '../data/surah_metadata.json';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Surahs'>;
};

type Surah = {
  id: number;
  name: string;
  transliteration: string;
  type: string;
  total_verses: number;
  link: string;
};

const SurahListScreen = ({ navigation }: Props) => {
  const renderItem = ({ item }: { item: Surah }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('Surah', {
          surahNumber: item.id,
          surahName: item.transliteration,
          surahLink: item.link,
        })
      }
    >
      <Text style={styles.title}>
        {item.id}. {item.transliteration} ({item.name})
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={surahList as Surah[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
  },
});

export default SurahListScreen;