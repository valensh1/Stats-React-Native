import { View, StyleSheet } from 'react-native';
import Home from '../app/Home';
import SportIcons from '../components/SportIcons';

export default function Index() {
  return (
    <View style={styles.container}>
      <Home />
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
