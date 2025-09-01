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

import Snackbar from 'react-native-snackbar';
import {AuthContext} from './AuthProvider';

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export const OrderProvider: FC<{children: ReactNode}> = ({children}) => {
  const [orderArray, setOrderArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {AT, getUser}: any = useContext(AuthContext);
  const Axios = axios.create({
    baseURL: `${Config.BURL}/api/orders`,
    responseType: 'json',
  });
  const placeOrder = async (UiD: string) => {
    setIsLoading(true);
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
        duration: Snackbar.LENGTH_LONG,
      });
      getUser();
      //   orderArray.push(req.data.details)
    } catch (error: any) {
      console.log(error.response);
      Snackbar.show({
        text: 'Error Occured in addOrder',
        duration: Snackbar.LENGTH_LONG,
      });
    }
    setIsLoading(false);
  };
  let fetchOrder = async () => {
    setIsLoading(true);
    try {
      console.log(AT);
      let req = await Axios.get('/fetchUOrder', {
        headers: {
          authtoken: String(AT),
        },
      });
      console.log(req);
      console.log(req.data);
      setOrderArray(req.data.orderedItems);
      console.log(orderArray);
      getUser();
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Error Occured in fetchOrder',
        duration: Snackbar.LENGTH_LONG,
      });
    }
    setIsLoading(false);
  };

  const fulfillOrder = async (PiD: string) => {
    setIsLoading(true);
    try {
      let req = await Axios({
        method: 'delete',
        url: '/fulfilOrder',
        data: {
          PiD,
        },
      });

      Snackbar.show({
        text: 'Order Cancelled',
        duration: Snackbar.LENGTH_LONG,
      });

      fetchOrder();
    } catch (error) {
      Snackbar.show({
        text: 'Error Occured in Cancel Order',
        duration: Snackbar.LENGTH_LONG,
      });
    }
    setIsLoading(false);
  };

  return (
    <OrderContext.Provider
      value={{orderArray, fetchOrder, placeOrder, isLoading, fulfillOrder}}>
      {children}
    </OrderContext.Provider>
  );
};
