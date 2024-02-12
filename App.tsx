import {StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import TabNav from './src/components/Navigatiors/TabNav';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/components/Navigatiors/Auth';
import {AuthContext, AuthProvider} from './src/contexts/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppMainNavigator from './src/components/Navigatiors/AppMainNavigator';
import {RewardProvider} from './src/contexts/RewardProvider';
import {OrderProvider} from './src/contexts/OrderProvider';
import BagProvider from './src/contexts/BagProvider';

const App = () => {
  return (
    <AuthProvider>
      <RewardProvider>
        <OrderProvider>
          <BagProvider>
            <NavigationContainer>
              <AppMainNavigator />
            </NavigationContainer>
          </BagProvider>
        </OrderProvider>
      </RewardProvider>
    </AuthProvider>
  );
};
export default App;
const styles = StyleSheet.create({});
