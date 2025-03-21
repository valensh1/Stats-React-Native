import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../Styles/Colors';

interface Credentials {
  emailAddress: string;
  password: string;
}

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
    <View style={styles.container}>
      <Text>Email Address</Text>
      <TextInput
        onChangeText={(text) => credentialHandler(text, 'emailAddress')}
        value={credentials.emailAddress}
        style={styles.textInput}></TextInput>
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => credentialHandler(text, 'password')}
        value={credentials.password}
        style={styles.textInput}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 5,
    borderColor: 'red',
    alignItems: 'center',
  },
  textInput: {
    borderColor: colors.globalSecondaryColor,
    borderWidth: 2,
    width: '70%',
  },
});

export default Authentication;
