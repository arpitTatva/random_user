/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './src/packages/blocks/login/src/loginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/packages/blocks/home/src/homeScreen';
import FavouriteScreen from './src/packages/blocks/favourite/src/favouriteScreen';
import {email, lock} from './src/packages/blocks/login/src/assets';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#D14CCC',
        tabBarInactiveTintColor: '#AEAEAE',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '800'},
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View
                style={{
                  borderTopColor: focused ? '#D14CCC' : '#FFFFFF',
                  borderTopWidth: 2,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: size, height: size}}
                  source={email}
                  tintColor={focused ? '#D14CCC' : '#AEAEAE'}
                />
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View
                style={{
                  borderTopColor: focused ? '#D14CCC' : '#FFFFFF',
                  borderTopWidth: 2,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: size, height: size}}
                  source={email}
                  tintColor={focused ? '#D14CCC' : '#AEAEAE'}
                />
              </View>
            );
          },
        }}
        name="Favourite"
        component={FavouriteScreen}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TabScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
