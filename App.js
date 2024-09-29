import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screens/screen_01';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen_02 from './screens/screen_02';
import screen_03 from './screens/screen_03';
import screen_04 from './screens/screen_04';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='product-detail' screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="home"
          component={Screen_01}
        />
        <Stack.Screen name="signUp" component={screen_02} />
        <Stack.Screen name="login" component={screen_03} />
        <Stack.Screen name="product-detail" component={screen_04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



