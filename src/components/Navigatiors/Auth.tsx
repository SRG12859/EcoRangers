import React, {useState} from 'react';
import Login from '../Auth/Login';

//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Auth/SignIn';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const [userNameText, setUserNameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [cnfPass, setCnfPass] = useState('');
  const [loginMsg, setLoginMsg] = useState('Be careful while entering Text');
  const [loginMsgStat, setLoginMsgStat] = useState('#900009');
  const [signInMsg, setSignInMsg] = useState('Be careful while entering Text');
  const [signInMsgStat, setSignInMsgStat] = useState('#900009');

  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="LogIn"
        options={{
          title: 'Login to EcoRangers',
        }}>
        {props => (
          <Login
            {...props}
            loginMsgStat={loginMsgStat}
            setLoginMsgStat={setLoginMsgStat}
            setPasswordText={setPasswordText}
            setUserNameText={setUserNameText}
            loginMsg={loginMsg}
            userNameText={userNameText}
            passwordText={passwordText}
            setLoginMsg={setLoginMsg}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="SignIn"
        options={{
          title: 'Sign in to EcoRangers',
        }}>
        {props => (
          <SignIn
            {...props}
            cnfPass={cnfPass}
            setCnfPass={setCnfPass}
            signInMsgStat={signInMsgStat}
            setSignInMsgStat={setSignInMsgStat}
            setPasswordText={setPasswordText}
            setUserNameText={setUserNameText}
            signInMsg={signInMsg}
            userNameText={userNameText}
            passwordText={passwordText}
            setSignInMsg={setSignInMsg}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Auth;
