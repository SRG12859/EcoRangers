import React, {useEffect, useState} from 'react';
import Login from '../Auth/Login';

//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Auth/SignUp';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const [userNameText, setUserNameText] = useState('');
  useEffect(() => {
    console.log(userNameText);

    return () => {
      console.log(userNameText);
    };
  }, [userNameText]);

  const [passwordText, setPasswordText] = useState('');
  const [cnfPass, setCnfPass] = useState('');

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
            setPasswordText={setPasswordText}
            setUserNameText={setUserNameText}
            userNameText={userNameText}
            passwordText={passwordText}
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
            setPasswordText={setPasswordText}
            setUserNameText={setUserNameText}
            userNameText={userNameText}
            passwordText={passwordText}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Auth;
