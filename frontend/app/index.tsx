import { View, StyleSheet, Pressable, Text } from 'react-native';
import SportIcons from '../components/SportIcons';
import { useRouter } from 'expo-router';
import Authentication from '../components/Authentication';

//! Choose Sport Page
const Home = () => {
  const router = useRouter();

  const navigateToHomePage = () => {
    router.push(`/LandingPage`);
  };

  return (
    <View style={styles.container}>
      <Authentication />
      <Pressable onPress={navigateToHomePage}>
        <Text>Go to Home Page</Text>
      </Pressable>
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
    borderWidth: 10,
    borderColor: 'green',
  },
});

export default Home;
