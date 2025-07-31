import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurahListScreen from './src/screens/SurahListScreen';
import SurahScreen from './src/screens/SurahScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Surahs">
        <Stack.Screen name="Surahs" component={SurahListScreen} />
        <Stack.Screen name="Surah" component={SurahScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}