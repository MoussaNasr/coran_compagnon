import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import surahList from '../data/surah_metadata.json';

const SurahListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
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
      <Text style={styles.title}>{item.number}. {item.englishName} ({item.name})</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={surahList}
      keyExtractor={(item) => item.number.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default SurahListScreen;