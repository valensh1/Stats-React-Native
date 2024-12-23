import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const SportIcons = () => {
  const router = useRouter();

  const sportSelectionHandler = () => {
    router.push('/SportPositions');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Choose Your Sport</Text>
      </View>
      <View style={styles.iconStyles}>
        <Pressable onPress={() => sportSelectionHandler()}>
          <Text>Baseball</Text>
          <MaterialCommunityIcons
            name="baseball-bat"
            size={100}
            color="black"
          />
        </Pressable>
      </View>
      <View style={styles.iconStyles}>
        <Text>Basketball</Text>
        <Ionicons name="basketball-outline" size={100} color="black" />
      </View>
      <View style={styles.iconStyles}>
        <Text>Football</Text>
        <Ionicons
          name="american-football-outline"
          size={100}
          color="black"></Ionicons>
      </View>
      <View style={styles.iconStyles}>
        <Text>Hockey</Text>
        <MaterialIcons name="sports-hockey" size={100} color="black" />
      </View>
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
  iconStyles: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SportIcons;
