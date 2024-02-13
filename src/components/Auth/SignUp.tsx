import {AuthContext} from '../../contexts/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
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

const SignUp = ({
  setPasswordText,
  setUserNameText,
  userNameText,
  passwordText,
  navigation,
}: any) => {
  const [visibilePass, setVisiblePass] = useState(true);
  const {isLoading, signup, uN}: any = useContext(AuthContext);
  return (
    <KeyboardAvoidingView style={styles.supremeWrapper}>
      <Spinner
        visible={isLoading}
        color="#FF9900"
        overlayColor="rgba(255, 240, 218, 0.30)"
        size={90}
      />
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, {uN}</Text>
      </View>
      <View style={styles.welcmTxtShowWrapper}>
        <Text style={styles.welcmTxtShowWrapperText}>Make an Account</Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <View>
            <TextInput
              style={styles.TxtInp}
              placeholder="Email"
              placeholderTextColor="#050505"
              onChangeText={newText => setUserNameText(newText)}
              defaultValue={userNameText}
            />
          </View>
          <View style={styles.pCoverWrapper}>
            <TextInput
              secureTextEntry={!visibilePass}
              style={[styles.passTxtInp]}
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
                signup(userNameText, passwordText);
              }}
              title="Sign In"
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
            navigation.push('LogIn');
          }}>
          <Text style={styles.ChangeModeTxt}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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

    alignItems: 'center',
    // alignContent: 'center',
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
    flex: 1,
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
    height: 53,
    width: 310,
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    color: '#050505',
  },
  passTxtInp: {
    color: '#050505',
    backgroundColor: '#E7E7E7',
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
    marginTop: 0,
    marginLeft: 25,
  },
  ChangeModeTxt: {
    fontSize: 14,
    color: 'rgb(0,83,130)',
    fontWeight: '700',
  },
});
