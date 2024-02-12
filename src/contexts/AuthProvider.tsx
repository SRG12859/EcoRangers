import {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {AuthContextType} from './AuthContextType';
import axios from 'axios';
import Config from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const BURL: string = Config.BURL!;
const Axios = axios.create({
  baseURL: `http://192.168.1.104:5000/api/auth`,
  responseType: 'json',
});
export const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
  const [uN, setUN] = useState('EcoRanger');
  const [civilPt, setCivilPt] = useState(100000);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [JWT, setJWT] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorAuthMSG, setErrorAuthMSG] = useState('');
  const [AT, setAT] = useState('');

  let login = async (email: string, password: string) => {
    try {
      let req = await Axios({
        method: 'post',
        url: '/login',
        data: {
          email,
          password,
        },
      });
      setErrorAuthMSG('Logged on succesfully');
      Snackbar.show({
        text: String(errorAuthMSG),
        duration: Snackbar.LENGTH_LONG,
      });

      setJWT(req.data.authtoken);
      await AsyncStorage.setItem('at', JWT);
      setUN('SG');
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    } catch (error: any) {
      setIsLoggedIn(false);
      console.log(error.response.data.success);
      if (error.response.data.success == false) {
        console.log('-----------------------------');
        console.log('1');
        return Snackbar.show({
          text: String(error.response.data.text),
          duration: Snackbar.LENGTH_LONG,
        });
      } else if (error.response.data.errors.length === 0) {
        console.log('-----------------------------');
        console.log('2');
        Snackbar.show({
          text: String(error.response.data.errors[0].msg),
          duration: Snackbar.LENGTH_LONG,
        });
        // setErrorAuthMSG('');
      } else {
        return Snackbar.show({
          text: String(error.response.data.errors[0].msg),
          duration: Snackbar.LENGTH_LONG,
        });
      }
    }
  };
  let signup = async (email: string, password: string) => {
    try {
      let req = await Axios({
        method: 'post',
        url: '/signup',
        data: {
          email,
          password,
        },
      });
      await AsyncStorage.setItem('at', JWT);

      if (req.data.success) {
        setErrorAuthMSG('Logged on succesfully');
        setJWT(req.data.authtoken);
        Snackbar.show({
          text: String(errorAuthMSG),
          duration: Snackbar.LENGTH_LONG,
        });
        await AsyncStorage.setItem('at', JWT);
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      setIsLoggedIn(false);
      console.log(error.response.data.success);
      if (error.response.data.success == false) {
        console.log('-----------------------------');
        console.log('1');
        return Snackbar.show({
          text: String(error.response.data.text),
          duration: Snackbar.LENGTH_LONG,
        });
      } else if (error.response.data.errors.length === 0) {
        console.log('-----------------------------');
        console.log('2');
        Snackbar.show({
          text: String(error.response.data.errors[0].msg),
          duration: Snackbar.LENGTH_LONG,
        });
        // setErrorAuthMSG('');
      } else {
        return Snackbar.show({
          text: String(error.response.data.errors[0].msg),
          duration: Snackbar.LENGTH_LONG,
        });
      }
    }
  };
  let logout = async () => {
    try {
      setIsLoggedIn(false);
      await AsyncStorage.removeItem('at');
      Snackbar.show({
        text: String('Logged Off'),
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
  };

  const fetchAT = async () => {
    try {
      setIsLoading(true);
      let at: any = await AsyncStorage.getItem('at');
      setAT(at);
      if (at) setIsLoggedIn(true);

      console.log(at);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAT();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        JWT,
        logout,
        signup,
        login,
        isLoading,
        AT,
        isLoggedIn,
        civilPt,
        uN,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
