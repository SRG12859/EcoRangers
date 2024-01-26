import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../Home/Home';
import {Image} from 'react-native';
import Reward from '../Reward/Reward';

const Tab = createMaterialBottomTabNavigator();
type Props = {
  uN: string;
};
const TabNav = ({uN}: Props) => {
  const [colorTB, setColorTB] = useState('');
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#050505"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#D4FAFF'}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../../../assets/Home.png')} />
          ),
        }}>
        {props => <Home {...props} uN={uN.toString()} />}
      </Tab.Screen>
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
    </Tab.Navigator>
  );
};

export default TabNav;
