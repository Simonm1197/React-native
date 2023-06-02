import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Card from '../Components/card';
import ScanCard from '../Components/scanCard';
import AddCard from '../Components/addCard';
import Setting from '../Components/setting';
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from '../Components/contacts';

const Tab = createBottomTabNavigator();

function BotNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Cards') {
            iconName = focused ? 'card' : 'card-outline';
          }
          if (route.name === 'Scan Cards') {
            iconName = focused ? 'scan' : 'scan-outline';
          }
          if (route.name === 'Add Cards') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          if (route.name === 'Contacts') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{header: () => null}}
        name="Cards"
        component={Card}
      />
      <Tab.Screen
        name="Scan Cards"
        component={ScanCard}
        options={{header: () => null}}
      />
      <Tab.Screen name="Add Cards" component={AddCard} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen
        options={{header: () => null}}
        name="Settings"
        component={Setting}
      />
    </Tab.Navigator>
  );
}
export default BotNavigator;
