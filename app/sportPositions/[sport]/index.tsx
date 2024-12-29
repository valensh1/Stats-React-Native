import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const SportPosition: React.FC = () => {
  const router = useRouter();
  const { sport } = useLocalSearchParams<{ sport: string }>();
  const positions = [];

  switch (sport.toLowerCase()) {
    case 'baseball':
      positions.push('Pitcher', 'Fielder');
      break;
    case 'football':
      positions.push('Offense', 'Defense');
      break;
    case 'hockey':
      positions.push('Goalie', 'Skater');
      break;
  }

  const choosePositionHandler = (position: string) => {
    console.log(`This is the position that was clicked ${position}`);
    router.push(`/sportPositions/${sport}/${position}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.positionButtonContainer}>
        {positions.map((position) => {
          return (
            <Pressable
              style={styles.positionButtons}
              onPress={() => choosePositionHandler(position)}
              key={position}>
              <Text style={styles.buttonText}>{position}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  positionButtonContainer: {
    width: '50%',
    alignItems: 'center',
  },
  positionButtons: {
    borderColor: 'black',
    backgroundColor: 'orange',
    borderWidth: 1,
    borderRadius: 3,
    width: '80%',
    height: '15%',
    marginVertical: 25,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default SportPosition;
