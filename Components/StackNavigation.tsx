import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BotNavigator from '../Navigator/botNavigator';
import Scan from './scan';
import Welcome from './welcome';
import SignUp from './signUp';
import Login from './login';
import Scanned from './scanned';
import Contacts from './contacts';
import EditCard from './editCard';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="botNavigator"
          component={BotNavigator}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="CameraPage"
          component={Scan}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={Welcome}
          // options={{header: () => null}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUp}
          options={{title: null}}
        />
        <Stack.Screen
          name="LogInPage"
          component={Login}
          options={{title: null}}
        />

        <Stack.Screen
          name="SignInPage"
          component={SignUp}
          options={{title: null}}
        />

        <Stack.Screen
          name="ScannedPage"
          component={Scanned}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="EditContactPage"
          component={EditCard}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="ContactPage"
          component={Contacts}
          options={{title: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
