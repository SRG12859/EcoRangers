import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {OrderContext} from '../../contexts/OrderProvider';
import OrderItem from './OrderItem';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../contexts/AuthProvider';

const Order = () => {
  const {isLoading, orderArray, fetchOrder, AT}: any = useContext(OrderContext);
  const {uN, logout}: any = useContext(AuthContext);

  useEffect(() => {
    fetchOrder();
  }, [AT]);
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
        {orderArray != null &&
        orderArray != undefined &&
        orderArray.length > 0 ? (
          orderArray.map(
            (element: {
              image: string;
              title: string;
              BPiD: any;
              PiD: any;
              price: number;
              UiD: any;
            }) => {
              return (
                <OrderItem
                  key={element.PiD}
                  UiD={element.UiD}
                  BPiD={String(element.BPiD)}
                  PiD={element.PiD}
                  price={element.price}
                  UiD={element.UiD}
                  image={element.image}
                  text={element.title}
                />
              );
            },
          )
        ) : (
          <Text>No Orders Are Made</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;

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
