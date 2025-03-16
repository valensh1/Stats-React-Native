import React from 'react';
import axios from 'axios';
import { FIREBASE_DATABASE_URL } from 'react-native-dotenv';

const APIUtils = () => {
  axios.post(`${FIREBASE_DATABASE_URL}`, {
    sports: ['guard', 'forward', 'center', 'goalie', 'skater'],
  });
};

export default APIUtils;
