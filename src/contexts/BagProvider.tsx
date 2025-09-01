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

import Snackbar from 'react-native-snackbar';
import {AuthContext} from './AuthProvider';

export const BagContext = createContext<BagContextType | undefined>(undefined);
export const BagProvider: FC<{children: ReactNode}> = ({children}) => {
  const {AT}: any = useContext(AuthContext);
  const [qrScanData, setQrScanData] = useState('');
  const Axios = axios.create({
    baseURL: `${Config.BURL}/api/bags`,
    responseType: 'json',
  });
  useEffect(() => {
    console.log(qrScanData);
    if (qrScanData !== null || qrScanData !== undefined || qrScanData !== '') {
      claimBag();
    }
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
      Snackbar.show({
        text: 'error occured in claimBag',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <BagContext.Provider value={{setQrScanData}}>
      {children}
    </BagContext.Provider>
  );
};

export default BagProvider;
