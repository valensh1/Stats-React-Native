import { View, Text, StyleSheet, Pressable } from 'react-native';
import SportIcons from '../components/SportIcons';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  const sportSelectionHandler = () => {
    router.push('/SportPositions');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Choose Your Sport</Text>
      </View>
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
    justifyContent: 'flex-start',
    height: '100%',
    width: '80%',
    marginTop: 35,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: '1px solid black',
  },
});

export default Home;
