import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './screens/Home/index';
import Wallet from './screens/Wallet/index';
import Pay from './screens/Pay/index';

import PayButton from './components/PayButton/index';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },

  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return <PayButton onPress={() => navigation.navigate('Pay')} focused={focused}></PayButton>;
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color}></Icon>;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'inicio',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{
          title: 'Notificações',
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{
          title: 'Ajustes',
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navigation;
