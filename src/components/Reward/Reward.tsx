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
import React from 'react';
import RewardItem from './RewardItem';

const Reward = () => {
  return (
    <SafeAreaView style={styles.supremeWrapper}>
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, EcoRanger</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.settings}
          onPress={() => Alert.alert('Open Setting')}>
          <Image source={require('../../../assets/settings.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <RewardItem
          image="https://www.hindustanpencils.com/wp-content/uploads/2017/09/621-PLASTO-NEW-IMAGE-15.11.jpg"
          text="Eraser"
          price={200}
        />
        <RewardItem
          image="https://www.hindustanpencils.com/wp-content/uploads/2017/08/sharpner-nataraj-621.jpg"
          text="Sharpner"
          price={150}
        />
        <RewardItem
          image="https://www.hindustanpencils.com/wp-content/uploads/2018/02/Nataraj-petals-eraser.png"
          text="Petal Eraser"
          price={200}
        />
        <RewardItem
          image="https://www.hindustanpencils.com/wp-content/uploads/2017/11/Nataraj-Heart-Sharpener-feature-image15.11.17-3.jpg"
          text="Sharpner"
          price={250}
        />
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
