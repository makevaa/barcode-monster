import { useState, useEffect, createContext, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DataProvider } from './src/myContext';
import ScanScreen from './components/ScanScreen'
import MonstersScreen from './components/MonstersScreen'
import SettingsScreen from './components/SettingsScreen'


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  useFonts({
    'BigNoodle': require('./assets/fonts/big_noodle_titling_oblique.ttf'),
  });

  return (
    <DataProvider>
      <PaperProvider style={styles.container}>

        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Scan"
            activeColor="black"
            barStyle={{ backgroundColor: '#3b8fde' }}
          >
            <Tab.Screen
              name="Scan"
              component={ScanScreen}
              options={{
                tabBarLabel: 'Scan',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="barcode" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Monsters"
              component={MonstersScreen}
              options={{
                tabBarLabel: 'Monsters',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="ghost" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={26} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

        <StatusBar style="light" backgroundColor='black' />
      </PaperProvider>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f33',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:0
  },
});
