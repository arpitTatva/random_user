import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Platform,
  // Customizable Area Start
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  // Customizable Area End
} from 'react-native';

import LoginController, {Props, configJSON} from './loginController';
import {email, lock, logoIcon} from './assets';
import Scale, {scaledSize, verticalScale} from '../../../components/Scale';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class LoginScreen extends LoginController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.main}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#C5C5C5'} />
          {/* Customizable Area Start */}
          {/* Merge Engine UI Engine Code */}
          <View style={styles.viewStyle}>
            <View style={styles.white}>
              <View style={styles.logoContainer}>
                <Image
                  resizeMode={'cover'}
                  style={styles.logoStyle}
                  source={logoIcon}
                />
              </View>
              <Text style={styles.loginText}>{configJSON.loginText}</Text>
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderBottomColor: this.state.isValidEmail
                      ? '#D14CCC'
                      : '#AEAEAE',
                  },
                ]}>
                <Image
                  resizeMode={'contain'}
                  source={email}
                  style={[
                    styles.inputIcon,
                    {
                      tintColor: this.state.isValidEmail
                        ? '#D14CCC'
                        : '#AEAEAE',
                    },
                  ]}
                />
                <TextInput
                  style={styles.input}
                  placeholder={configJSON.emailText}
                  autoCapitalize={'none'}
                  value={this.state.email}
                  onChangeText={text => this.onChangeEmail(text)}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderBottomColor: this.state.isValidPassword
                      ? '#D14CCC'
                      : '#AEAEAE',
                  },
                ]}>
                <Image
                  resizeMode={'contain'}
                  source={lock}
                  style={[
                    styles.inputIcon,
                    {
                      tintColor: this.state.isValidPassword
                        ? '#D14CCC'
                        : '#AEAEAE',
                    },
                  ]}
                />
                <TextInput
                  style={styles.input}
                  placeholder={configJSON.passwordText}
                  autoCapitalize={'none'}
                  value={this.state.password}
                  secureTextEntry={true}
                  onChangeText={text => this.onChangePassword(text)}
                />
              </View>
              <TouchableOpacity
                disabled={
                  !(this.state.isValidEmail && this.state.isValidPassword)
                }
                style={[
                  styles.buttonCont,
                  {
                    backgroundColor:
                      this.state.isValidEmail && this.state.isValidPassword
                        ? '#D14CCC'
                        : '#AEAEAE',
                  },
                ]}
                onPress={() => this.onLoginPress()}>
                <Text style={styles.buttonText}>{configJSON.loginText}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Merge Engine UI Engine Code */}
          {/* Customizable Area End */}
        </KeyboardAwareScrollView>
      </SafeAreaView>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {flexGrow: 1},
  viewStyle: {
    flex: 1,
    backgroundColor: '#C5C5C5',
    height: '100%',
  },
  white: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: Scale(15),
    marginVertical: verticalScale(55),
    paddingHorizontal: scaledSize(15),
  },
  logoContainer: {
    height: scaledSize(100),
    width: scaledSize(100),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: verticalScale(-40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },
  logoStyle: {
    height: scaledSize(70),
    width: scaledSize(70),
  },
  loginText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: verticalScale(24),
    marginBottom: verticalScale(40),
    textTransform: 'uppercase',
    color: '#000000',
  },
  inputIcon: {
    height: verticalScale(22),
    width: scaledSize(25),
  },
  inputContainer: {
    borderBottomWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? verticalScale(6) : null,
    marginBottom: verticalScale(40),
  },
  input: {
    fontSize: Scale(18),
    marginLeft: scaledSize(10),
  },
  buttonCont: {
    height: verticalScale(55),
    width: '100%',
    borderRadius: Scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
// Customizable Area End
