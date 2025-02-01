import { View, StyleSheet } from 'react-native';
import SportIcons from '../components/SportIcons';
import { useRouter } from 'expo-router';

//! Choose Sport Page
const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SportIcons
        sport="Baseball"
        iconName="baseball-bat"
        iconLibrary="MaterialCommunityIcons"
      />
      <SportIcons
        sport="Basketball"
        iconName="basketball-outline"
        iconLibrary="Iconicons"
      />
      <SportIcons
        sport="Football"
        iconName="american-football-outline"
        iconLibrary="Iconicons"
      />
      <SportIcons
        sport="Hockey"
        iconName="sports-hockey"
        iconLibrary="MaterialIcons"
      />
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
