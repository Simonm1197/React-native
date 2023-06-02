/* eslint-disable react-native/no-inline-styles */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import General from './TopNav/general';
import Display from './TopNav/display';
import Links from './TopNav/links';

const Tab = createMaterialTopTabNavigator();

const EditCard = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Feather
          name="x"
          size={25}
          color={'#3055D9'}
          style={{
            backgroundColor: '#DADFDF',
            width: 40,
            height: 40,
            borderRadius: 30,
            padding: 7,
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#2242D8'}}>
          Edit card
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#DADFDF',
            width: 70,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: '#2242D8'}}>Save</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          borderWidth: 0.2,
          borderColor: '#C8D0D0',
          marginTop: 15,
        }}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="General" component={General} />
        <Tab.Screen name="Display" component={Display} />
        <Tab.Screen name="Link" component={Links} />
      </Tab.Navigator>
    </View>
  );
};

export default EditCard;
