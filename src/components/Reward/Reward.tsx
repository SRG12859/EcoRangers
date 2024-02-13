import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import RewardItem from './RewardItem';
import {RewardContext} from '../../contexts/RewardProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../contexts/AuthProvider';

const Reward = () => {
  const {isLoading, rewardItems, fetchReward}: any = useContext(RewardContext);
  const {uN, logout}: any = useContext(AuthContext);
  useEffect(() => {
    fetchReward();
  }, []);
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
      <ScrollView>
        {rewardItems.map(
          (element: {
            image: string;
            title: string;
            price: number;
            UiD: string;
          }) => {
            return (
              <RewardItem
                key={element.UiD}
                image={element.image}
                text={element.title}
                price={element.price}
                UiD={element.UiD}
              />
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reward;

const styles = StyleSheet.create({
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
  supremeWrapper: {
    color: '#f5f5f5',
    height: '100%',
  },
});
