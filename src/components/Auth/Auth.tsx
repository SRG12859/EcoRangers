import {
  Alert,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Auth = () => {
  const [isTrueFormLogin, setIsTrueFormLogin] = useState(true);
  const [userNameText, setUserNameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
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
    AuthBtn: {
      height: 75,
      width: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    loginBtn: {
      backgroundColor: isTrueFormLogin ? '#567BFF' : '#D9D9D9',
    },
    joinBtn: {
      backgroundColor: !isTrueFormLogin ? '#567BFF' : '#D9D9D9',
    },
    AuthBtnWrapper: {
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    AuthLabel: {
      fontSize: 32,
      fontWeight: '500',
    },
    TxtInp: {
      backgroundColor: '#E7E7E7',
      height: 'auto',
      width: 315,
      margin: 20,
      padding: 10,
      borderColor: '#E7E7E7',
      borderStyle: 'solid',
      borderRadius: 15,
    },
  });
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
      <View>
        <View style={styles.AuthBtnWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.AuthBtn, styles.loginBtn]}
            onPress={() => setIsTrueFormLogin(true)}>
            <Text style={styles.AuthLabel}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.AuthBtn, styles.joinBtn]}
            onPress={() => setIsTrueFormLogin(false)}>
            <Text style={styles.AuthLabel}>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          {isTrueFormLogin ? (
            <View>
              <View>
                <TextInput
                  style={styles.TxtInp}
                  placeholder="Username"
                  onChangeText={newText => setUserNameText(newText)}
                  defaultValue={userNameText}
                />
              </View>
              <View>
                <TextInput
                  style={styles.TxtInp}
                  placeholder="Username"
                  onChangeText={newText => setPasswordText(newText)}
                  defaultValue={passwordText}
                />
              </View>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
