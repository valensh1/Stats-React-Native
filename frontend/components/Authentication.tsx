import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';
import colors from '../Styles/Colors';

interface Credentials {
  emailAddress: string;
  password: string;
}

const { height } = Dimensions.get('window');

const defaultCredentials: Credentials = {
  emailAddress: '',
  password: '',
};

const Authentication = () => {
  //? USE STATE
  const [credentials, setCredentials] =
    useState<Credentials>(defaultCredentials);
  const [isFocused, setIsFocused] = useState<{
    email: boolean;
    password: boolean;
  }>({
    email: false,
    password: false,
  });
  const [isInputFieldsEmpty, setIsInputFieldsEmpty] = useState<boolean>(true);

  //? FUNCTIONS
  const credentialHandler = (text: string, fieldName: keyof Credentials) => {
    const updatedCredentials = { ...credentials, [fieldName]: text };
    setCredentials(updatedCredentials);
    updatedCredentials.emailAddress && updatedCredentials.password
      ? setIsInputFieldsEmpty(false)
      : setIsInputFieldsEmpty(true);
  };

  return (
    <View style={styles.overallContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.singleFieldContainer}>
          <Text style={styles.labels}>Email Address</Text>
          <TextInput
            onChangeText={(text) => credentialHandler(text, 'emailAddress')}
            value={credentials.emailAddress}
            style={[styles.textInput, isFocused.email && styles.focusedState]}
            onFocus={() => setIsFocused({ email: true, password: false })}
            onBlur={() => setIsFocused({ ...isFocused, email: false })}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={styles.singleFieldContainer}>
          <Text style={styles.labels}>Password</Text>
          <TextInput
            onChangeText={(text) => credentialHandler(text, 'password')}
            value={credentials.password}
            style={[
              styles.textInput,
              isFocused.password && styles.focusedState,
            ]}
            onFocus={() => setIsFocused({ password: true, email: false })}
            onBlur={() => setIsFocused({ ...isFocused, password: false })}
            autoCapitalize="none"></TextInput>
        </View>
      </View>
      <View style={styles.loginButton}>
        <Button
          text={'Log In'}
          navigationPath={'/LandingPage'}
          buttonBackgroundColor={
            isInputFieldsEmpty
              ? colors.globalBackgroundColor
              : colors.globalSecondaryColor
          }
          buttonTextColor={colors.globalAlternateColor}
        />
      </View>
      <TouchableOpacity style={styles.newUserButtonContainer}>
        <Text style={styles.newUserButtonText}>Create a new user</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  overallContainer: {
    width: '85%',
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    height: height * 0.3,
    backgroundColor: colors.globalAlternateColor,
    borderColor: colors.globalAlternateColor,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
  },
  singleFieldContainer: {
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  labels: {
    color: colors.globalSecondaryColor,
    fontWeight: '500',
    fontSize: 15,
  },
  textInput: {
    borderColor: colors.globalSecondaryColor,
    color: colors.globalSecondaryColor,
    borderWidth: 2,
    borderRadius: 7,
    height: 40,
    paddingHorizontal: '3%',
  },
  focusedState: {
    backgroundColor: colors.globalSecondaryColor,
    color: colors.globalAlternateColor,
    fontWeight: 600,
  },
  loginButton: {
    width: '50%',
  },
  newUserButtonContainer: {
    marginTop: height * 0.015,
  },
  newUserButtonText: {
    fontSize: 15,
    color: colors.globalAlternateColor,
    fontWeight: 600,
  },
});

export default Authentication;
