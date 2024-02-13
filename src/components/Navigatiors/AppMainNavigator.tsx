import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Auth from './Auth';
import TabNav from './TabNav';
import {AuthContext} from '../../contexts/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AppMainNavigator() {
  const {AT, isLoggedIn}: any = useContext(AuthContext);
  return isLoggedIn ? <TabNav /> : <Auth />;
}
