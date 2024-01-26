import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Home from './src/components/Home/Home';
import TabNav from './src/components/Navigatiors/TabNav';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/components/Navigatiors/Auth';

const App = () => {
  const [uN, setUN] = useState('EcoRanger');
  const [civilPt, setCivilPt] = useState(100000);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <Auth /> : <TabNav uN={uN} civilPt={civilPt} />}
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});
