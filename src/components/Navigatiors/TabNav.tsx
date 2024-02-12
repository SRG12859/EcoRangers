import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../Home/Home';
import {Image} from 'react-native';
import Reward from '../Reward/Reward';
import Order from '../Orders/Order';
import QrScanner from '../QrScanner/QrScanner';

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
  const [colorTB, setColorTB] = useState('');
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#050505"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#D4FAFF'}}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../../../assets/Home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{
          tabBarLabel: 'Reward',
          tabBarIcon: ({color}) => (
            <Image source={require('../../../assets/Reward.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <Image source={require('../../../assets/Reward.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="QrScanBag"
        component={QrScanner}
        options={{
          tabBarLabel: 'Claim Bag',
          tabBarIcon: ({color}) => (
            <Image source={require('../../../assets/Reward.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
