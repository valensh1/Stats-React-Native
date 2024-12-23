import { View, StyleSheet } from 'react-native';
import SportIcons from '../components/SportsIcons';

export default function Home() {
  return (
    <View style={styles.container}>
      <SportIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
