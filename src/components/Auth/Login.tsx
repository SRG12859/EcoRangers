import {
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../../contexts/AuthProvider';

const Login = ({
  setPasswordText,
  setUserNameText,
  userNameText,
  passwordText,
  navigation,
}: any) => {
  const [visibilePass, setVisiblePass] = useState(true);
  const {isLoading, login}: any = useContext(AuthContext);
  return (
    <KeyboardAvoidingView style={styles.supremeWrapper}>
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, EcoRanger</Text>
      </View>
      <View style={styles.welcmTxtShowWrapper}>
        <Text style={styles.welcmTxtShowWrapperText}>
          Login To Your Account
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <View>
            <TextInput
              style={styles.TxtInp}
              placeholder="Email"
              placeholderTextColor="#050505"
              onChangeText={nT => setUserNameText(nT)}
              defaultValue={userNameText}
            />
          </View>
          <View style={styles.pCoverWrapper}>
            <TextInput
              secureTextEntry={!visibilePass}
              style={styles.passTxtInp}
              placeholder="Password"
              placeholderTextColor="#050505"
              onChangeText={newText => setPasswordText(newText)}
              defaultValue={passwordText}
            />
            <TouchableOpacity
              style={styles.pShowBtnImgBtn}
              activeOpacity={1}
              onPress={() => {
                setVisiblePass(!visibilePass);
              }}>
              {visibilePass ? (
                <Image
                  style={styles.pShowBtnImg}
                  source={require('../../../assets/visibility_true.png')}
                />
              ) : (
                <Image
                  style={styles.pShowBtnImg}
                  source={require('../../../assets/visibility_false.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.btnWrapper}>
            <Button
              onPress={() => {
                login(userNameText, passwordText);
              }}
              title="Login"
              color="#FF7A00"
              accessibilityLabel="To Authenticate yourself"
            />
          </View>
        </View>
      </View>
      <View style={styles.ChangeModeTxtWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('SignIn');
          }}>
          <Text style={styles.ChangeModeTxt}>Create an Account?</Text>
        </TouchableOpacity>
      </View>
      <Spinner
        visible={isLoading}
        color="#FF9900"
        overlayColor="rgba(255, 240, 218, 0.30)"
        size={90}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  errHandler: {
    height: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pCoverWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pShowBtnImg: {
    height: 30,
    width: 30,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  navigationNT: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcmText: {
    color: '#050505',
    fontSize: 20,
    fontWeight: '900',
  },
  settings: {},
  supremeWrapper: {
    color: '#f5f5f5',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  pShowBtnImgBtn: {
    marginLeft: 5,
    marginTop: 20,
  },
  TxtInp: {
    backgroundColor: '#E7E7E7',
    color: '#050505',
    height: 53,
    width: 310,
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
  },
  passTxtInp: {
    backgroundColor: '#E7E7E7',
    color: '#050505',
    height: 53,
    width: 270,
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
  },
  btnWrapper: {
    marginTop: 20,
  },
  welcmTxtShowWrapper: {
    backgroundColor: '#f5f5f5',
  },
  welcmTxtShowWrapperText: {
    color: 'rgb(62,62,62)',
    fontSize: 24,
    textAlign: 'center',
  },
  ChangeModeTxtWrapper: {
    marginTop: 10,
    marginLeft: 25,
  },
  ChangeModeTxt: {
    fontSize: 14,
    color: 'rgb(0,83,130)',
    fontWeight: '700',
  },
});
