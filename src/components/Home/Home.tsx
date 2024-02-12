import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthProvider';

const Home = () => {
  const {uN, civilPt}: any = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.supremeWrapper}>
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, {uN}</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.settings}
          onPress={() => Alert.alert('Open Setting')}>
          <Image source={require('../../../assets/settings.png')} />
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
