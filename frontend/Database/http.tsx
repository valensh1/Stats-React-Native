import { useUserContext } from '../store/context/userContext';
import axios from 'axios';
import { FIREBASE_URL } from '@env';

const useHttp = () => {
  const { user } = useUserContext(); // Uses `useUserContext` to get the user

  const postData = async () => {
    if (!user) return console.warn('User is not logged in'); // Ensures user exists before making the request

    try {
      const response = await axios.post(
        `${FIREBASE_URL}/sports.json?auth=${user.idToken}`, // Uses user's token
        {
          sports3: ['test1', 'test2', 'football', 'hockey'],
        }
      );
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Error posting data:',
          error.response ? error.response.data : error.message
        );
      } else {
        console.error('Error posting data:', (error as Error).message);
      }
    }
  };

  return { postData }; // Returns `postData` so it can be called in any component
};

export default useHttp;
