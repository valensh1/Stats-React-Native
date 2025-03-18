import axios from 'axios';
import { FIREBASE_URL } from '@env';

const http = async () => {
  try {
    const response = await axios.post(`${FIREBASE_URL}/sports.json`, {
      sports2: ['test1', 'test2', 'football', 'hockey'],
    });
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

export default http;
