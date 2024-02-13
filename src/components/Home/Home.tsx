import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../../contexts/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = () => {
  const {uN, civilPt, isLoading, AT, getUser, logout}: any =
    useContext(AuthContext);

  return (
    <SafeAreaView style={styles.supremeWrapper}>
      <Spinner
        visible={isLoading}
        color="#FF9900"
        overlayColor="rgba(255, 240, 218, 0.30)"
        size={90}
      />
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, {uN}</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.settings}
          onPress={() => logout()}>
          <Image source={require('../../../assets/logout.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.mContent}>
        <Text style={styles.civilPtAdv}>Your Civilian Points</Text>
        <Text style={styles.civilPtAdvNum}>{civilPt}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  supremeWrapper: {
    color: '#f5f5f5',
    height: '100%',
  },
  navigationNT: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '15%',
  },
  welcmText: {
    color: '#050505',
    fontSize: 24,
    fontWeight: '900',
  },
  settings: {},
  mContent: {
    height: '80%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  civilPtAdv: {
    color: '#050505',
    fontWeight: '700',
    fontSize: 24,
  },
  civilPtAdvNum: {
    color: '#858585',
    fontSize: 24,
  },
});
