import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Auth from './Auth';
import TabNav from './TabNav';
import {AuthContext} from '../../contexts/AuthProvider';

export default function AppMainNavigator() {
  const {AT}: any = AuthContext;
  return AT != null || AT != undefined || AT != '' ? <TabNav /> : <Auth />;
}
