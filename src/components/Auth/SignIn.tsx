import {
  Alert,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const SignIn = ({
  signInMsgStat,
  setSignInMsgStat,
  setPasswordText,
  setUserNameText,
  signInMsg,
  userNameText,
  passwordText,
  setSignInMsg,
  navigation,
}: any) => {
  const [visibilePass, setVisiblePass] = useState(true);
  return (
    <SafeAreaView style={styles.supremeWrapper}>
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, EcoRanger</Text>
      </View>
      <View style={styles.welcmTxtShowWrapper}>
        <Text style={styles.welcmTxtShowWrapperText}>Make an Account</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.formWrapper}>
          <View>
            <TextInput
              style={styles.TxtInp}
              placeholder="Username"
              onChangeText={newText => setUserNameText(newText)}
              defaultValue={userNameText}
            />
          </View>
          <View style={styles.pCoverWrapper}>
            <TextInput
              secureTextEntry={!visibilePass}
              style={styles.passTxtInp}
              placeholder="Password"
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
                console.log('SignIn');
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
            console.log('Create an account');
            navigation.push('LogIn');
          }}>
          <Text style={styles.ChangeModeTxt}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{color: signInMsgStat}}>{signInMsg}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  formWrapper: {
    height: '40%',
  },
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
  },
  passTxtInp: {
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
    marginTop: 10,
    marginLeft: 25,
  },
  ChangeModeTxt: {
    fontSize: 14,
    color: 'rgb(0,83,130)',
    fontWeight: '700',
  },
});
