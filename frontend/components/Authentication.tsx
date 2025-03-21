import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
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
  const [credentials, setCredentials] =
    useState<Credentials>(defaultCredentials);

  const credentialHandler = (text: string, fieldName: keyof Credentials) => {
    setCredentials((prev) => ({ ...credentials, [fieldName]: text }));
  };

  return (
    <View style={styles.overallContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Email Address</Text>
        <TextInput
          onChangeText={(text) => credentialHandler(text, 'emailAddress')}
          value={credentials.emailAddress}
          style={styles.textInput}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
          onChangeText={(text) => credentialHandler(text, 'password')}
          value={credentials.password}
          style={styles.textInput}></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  overallContainer: {
    width: '85%',
    height: height * 0.3,
    backgroundColor: colors.globalAlternateColor,
    borderColor: colors.globalAlternateColor,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: '5%',
    marginVertical: '5%',
    // borderWidth: 2,
    // borderColor: 'red',
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
    height: 40,
    paddingHorizontal: '3%',
  },
});

export default Authentication;
