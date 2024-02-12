import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {BagContextType} from './BagContextType';
import axios from 'axios';
import Config from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {AuthContext} from './AuthProvider';

export const BagContext = createContext<BagContextType | undefined>(undefined);
const BURL: string = Config.BURL!;
const Axios = axios.create({
  baseURL: `http://192.168.1.104:5000/api/bags`,
  responseType: 'json',
});
export const BagProvider: FC<{children: ReactNode}> = ({children}) => {
  const {AT}: any = useContext(AuthContext);
  const [qrScanData, setQrScanData] = useState('');
  useEffect(() => {
    console.log(qrScanData);
    claimBag();
    return () => {
      console.log(qrScanData);
    };
  }, [qrScanData]);
  const claimBag = async () => {
    try {
      let req = await Axios.put(
        '/claimSet',
        {
          URI: qrScanData,
        },
        {
          headers: {
            authtoken: AT,
          },
        },
      );

      console.log(req);
      console.log(req.data);
    } catch (error: any) {
      Alert.alert(String(error));
    }
  };

  return (
    <BagContext.Provider value={{setQrScanData}}>
      {children}
    </BagContext.Provider>
  );
};

export default BagProvider;
