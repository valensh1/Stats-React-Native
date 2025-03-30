import axios from 'axios';
import { FIREBASE_WEB_API_KEY } from '@env';
import { Alert } from 'react-native';

class APIUtils {
  public static async createUser(
    mode: string,
    email: string,
    password: string
  ) {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_WEB_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      Alert.alert(
        'Sign Up Failed',
        'There was an error creating your user account. Please try again!'
      );
    }
  }

  public static async loginUser(mode: string, email: string, password: string) {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_WEB_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      return [response.status, response.data];
    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Could not log you in. Please check your credentials and try again!'
      );
    }
  }
}
export default APIUtils;
