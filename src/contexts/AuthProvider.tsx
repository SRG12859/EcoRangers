import {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {AuthContextType} from './AuthContextType';
import axios from 'axios';
import Config from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {BURL} from '../../secrets';

import Snackbar from 'react-native-snackbar';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
  const [uN, setUN] = useState('EcoHelper');
  const [civilPt, setCivilPt] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [JWT, setJWT] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorAuthMSG, setErrorAuthMSG] = useState('');
  const [AT, setAT] = useState('');
  const Axios = axios.create({
    baseURL: `${BURL}/api/auth`,
    responseType: 'json',
  });
  Axios.defaults.headers.common['authtoken'] = AT;
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
      Snackbar.show({
        text: String('Logged on succesfully'),
        duration: Snackbar.LENGTH_LONG,
      });

      setJWT(req.data.authtoken);
      await AsyncStorage.setItem('at', JWT);
      setIsLoggedIn(true);
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
        setJWT(req.data.authtoken);
        Snackbar.show({
          text: String('Logged on succesfully'),
          duration: Snackbar.LENGTH_LONG,
        });
        await AsyncStorage.setItem('at', JWT);
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      setIsLoggedIn(false);
      console.log(error.response.data.success);
      if (error.response.data.success == false) {
        return Snackbar.show({
          text: String(error.response.data.text),
          duration: Snackbar.LENGTH_LONG,
        });
      } else if (error.response.data.errors.length === 0) {
        return Snackbar.show({
          text: String(error.response.data.errors[0].msg),
          duration: Snackbar.LENGTH_LONG,
        });
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
      return Snackbar.show({
        text: String('Logged Off'),
        duration: Snackbar.LENGTH_LONG,
      });
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
  };

  const fetchAT = async () => {
    try {
      setIsLoading(true);
      let at: string = await AsyncStorage.getItem('at');
      setAT(at);

      console.log(at);
      if (!emptyStrC(AT)) {
        setIsLoggedIn(true);
        await getUser();
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      return Snackbar.show({
        text: 'Error Occured in fetchAT',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };
  let getUser = async () => {
    try {
      let req = await Axios.get('/getuser', {
        headers: {
          authtoken: String(AT),
        },
      });
      setCivilPt(req.data.civilPt);
      console.log(req);
    } catch (error: any) {
      console.log(error);
      console.log(error.response);
      return Snackbar.show({
        text: 'Error Occured in getUser',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  const emptyStrC = (AT: string) => {
    if (AT?.length === 0 || AT === null || AT === undefined) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchAT();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUser();
    }

    return () => {
      if (isLoggedIn) {
        getUser();
      }
    };
  }, [AT]);

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
        getUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
