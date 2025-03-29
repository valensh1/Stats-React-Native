import { View, StyleSheet, Pressable, Text } from 'react-native';
import SportIcons from '../components/SportIcons';
import Login from './login';

const Home = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginTop: '-10%',
  },
});

export default Home;
