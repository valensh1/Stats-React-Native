import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import HockeyGoalieStats from './Hockey/HockeyGoalieStatTotals';
import StatButton from './StatButton';
import HockeyGoalieStatTotals from './Hockey/HockeyGoalieStatTotals';

const Stats: React.FC = () => {
  const { position } = useGlobalSearchParams<{ position: string }>();

  const [stats, setStats] = useState(0);

  const statCounter = () => {
    setStats((prev) => prev + 1);
    console.log(stats);
  };

  switch (position.toString().toLowerCase()) {
    case 'goalie':
      return (
        <View style={styles.container}>
          <View>
            <Text>Hockey Goalie</Text>
          </View>
          <HockeyGoalieStatTotals />
          <View style={styles.buttonsContainer}>
            <StatButton stats={statCounter} buttonText={'Saves'} />
            <StatButton buttonText={'Goals'} />
            <StatButton buttonText={'Shots'} />
            <StatButton buttonText={'Save %'} />
          </View>
        </View>
      );

    case 'skater':
      return (
        <View>
          <Text>Hockey Skater</Text>
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <Text>Position not recognized</Text>
        </View>
      );
  }
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '15%',
  },
});
export default Stats;
