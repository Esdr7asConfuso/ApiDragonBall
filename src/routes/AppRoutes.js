import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PersonagensScreen from '../screens/PersonagensScreen';
import DetalhesPersonagensScreen from '../screens/DetalhesPersonagensScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1A1A' },
        headerTintColor: '#FF9800',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Stack.Screen name="Personagens" component={PersonagensScreen} options={{ title: 'Personagens' }} />
      <Stack.Screen name="Detalhes" component={DetalhesPersonagensScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}