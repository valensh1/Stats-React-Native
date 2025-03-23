import {
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import colors from '../Styles/Colors';

const { height } = Dimensions.get('window');

interface SignupCredentials {
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

const defaultSignupCredentials = {
  emailAddress: '',
  password: '',
  confirmPassword: '',
};

const errorMessage: string = 'Passwords did NOT match...please try again!';

const signup = () => {
  const [credentials, setCredentials] = useState<SignupCredentials>(
    defaultSignupCredentials
  );
  const [isInputFieldsEmpty, setIsInputFieldsEmpty] = useState<boolean>(true);
  const [isPasswordCriteriaMet, setIsPasswordCriteriaMet] =
    useState<boolean>(true);

  const signUpCredentialHandler = useCallback(
    (field: keyof SignupCredentials, text: string): void => {
      setCredentials((prev) => ({
        ...prev,
        [field]: text,
      }));
    },
    [credentials] // Empty array will not re-create function on every render
  );

  useEffect(() => {
    setIsInputFieldsEmpty(
      credentials.emailAddress &&
        credentials.password &&
        credentials.confirmPassword
        ? false
        : true
    );
  }, [credentials]);

  useEffect(() => {
    console.log(
      'This is the updated state of whether the fields are all empty ' +
        isInputFieldsEmpty
    );
  }, [isInputFieldsEmpty]);

  const buttonFunctionOnPress = () => {
    setIsPasswordCriteriaMet(
      credentials.password !== credentials.confirmPassword ? false : true
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.overallContainer}>
        <View style={styles.signInTextInputContainer}>
          <View>
            <InputField
              label={'Email Address'}
              onChangeText={(text) =>
                signUpCredentialHandler('emailAddress', text)
              }
            />
          </View>
          <View>
            <InputField
              label={'Password'}
              onChangeText={(text) => signUpCredentialHandler('password', text)}
              secureTextEntry={true}
            />
          </View>
          <View>
            <InputField
              label={'Confirm Password'}
              onChangeText={(text) =>
                signUpCredentialHandler('confirmPassword', text)
              }
              secureTextEntry={true}
            />
          </View>
          <View>
            <Text style={styles.errorMessageContainer}>
              {!isPasswordCriteriaMet && errorMessage}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            text={'Sign Up'}
            buttonBackgroundColor={
              isInputFieldsEmpty
                ? colors.globalBackgroundColor
                : colors.globalSecondaryColor
            }
            buttonFunctionOnPress={buttonFunctionOnPress}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  overallContainer: {
    height: height * 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInTextInputContainer: {
    height: height * 0.4,
    width: '85%',
    backgroundColor: colors.globalAlternateColor,
    borderRadius: 15,
    justifyContent: 'space-evenly',
  },
  button: {
    width: '60%',
  },
  errorMessageContainer: {
    color: 'red',
    width: '85%',
    textAlign: 'center',
  },
});
export default signup;
