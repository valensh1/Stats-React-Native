import axios from 'axios';
import { FIREBASE_WEB_API_KEY } from '@env';

class APIUtils {
  public static async createUser(email: string, password: string) {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        'There was an error creating your user account. Please try again!'
      );
    }
  }
}
export default APIUtils;
