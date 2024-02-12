import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {OrderContextType} from './OrderContextType';
import axios from 'axios';
import Config from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {AuthContext} from './AuthProvider';

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);
const BURL: string = Config.BURL!;
const Axios = axios.create({
  baseURL: `http://192.168.1.104:5000/api/orders`,
  responseType: 'json',
});

export const OrderProvider: FC<{children: ReactNode}> = ({children}) => {
  const [orderArray, setOrderArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {AT}: any = useContext(AuthContext);

  const placeOrder = async (UiD: string) => {
    try {
      let req = await Axios.post(
        '/addOrder',
        {
          BPiD: UiD,
        },
        {
          headers: {
            authtoken: String(AT),
          },
        },
      );
      console.log(req.data);

      Snackbar.show({
        text: String('Order Placed!'),
        duration: Snackbar.LENGTH_SHORT,
      });
      //   orderArray.push(req.data.details)
    } catch (error: any) {
      console.log(error.response);
      Alert.alert(String(error));
    }
  };
  let fetchOrder = () => {
    try {
    } catch (error) {
      console.log(error);
      Alert.alert(String(error));
    }
  };

  return (
    <OrderContext.Provider
      value={{orderArray, fetchOrder, placeOrder, isLoading}}>
      {children}
    </OrderContext.Provider>
  );
};
