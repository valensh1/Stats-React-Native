import axios from 'axios';
import { FIREBASE_WEB_API_KEY } from '@env';

// const createUser = async (email: string, password: string) => {
//   const response = await axios.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     }
//   );
//   return response.data;
// };
// export default createUser;

class APIUtils {
  public static async createUser(email: string, password: string) {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    return response.data;
  }
}
export default APIUtils;
