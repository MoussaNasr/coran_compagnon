import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SurahListScreen from './src/screens/SurahListScreen';
import SurahScreen from './src/screens/SurahScreen';

export type RootStackParamList = {
  Surahs: undefined;
  Surah: {
    surahName: string;
    surahNumber: number;
    surahLink: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Surahs">
        <Stack.Screen
          name="Surahs"
          component={SurahListScreen}
          options={{ title: 'Quran Surahs' }}
        />
        <Stack.Screen
          name="Surah"
          component={SurahScreen}
          options={({ route }) => ({
            title: route.params?.surahName ?? 'Surah',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}