import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import statCategories from '../../../Database/statCategories';
import AntDesign from '@expo/vector-icons/AntDesign';

const StatsPage: React.FC = () => {
  //? Variables
  let { sport, position } = useLocalSearchParams<{
    sport: string;
    position: string;
  }>(); // Retrieves and destructures sport and position from the URL
  console.log(
    `This is the sport -> ${sport} and this is the position -> ${position}`
  );
  sport = sport.toLowerCase();
  position = position.toLowerCase();

  const statsToCalc = statCategories[sport][`${position}Calcs`];

  //? UseRef
  let resetAllStats = useRef<{ [key: string]: number }>({});

  //? UseState
  const [stats, setStats] = useState<{ [key: string]: number }>({});
  const [calculatedStats, setCalculatedStats] = useState<{
    [key: string]: number;
  }>({});

  //? UseEffect
  useEffect(() => {
    const obj: { [key: string]: number } = {};
    const categories = statCategories[sport][position];
    for (let category of categories) {
      obj[category] = 0;
    }
    console.log(obj);
    resetAllStats.current = { ...obj }; // Sets useRef with all stats at 0 when clear all button is pressed
    setStats(obj); // Sets all the stats related to sport at 0
    console.log(`This is the stats ${JSON.stringify(stats)}`);
  }, []);

  //? Functions
  const statHandler = (stat: string, direction: string): void => {
    const increment = (stat: string) => {
      return { [stat]: stats[stat] + 1 };
    };

    const decrement = (stat: string) => {
      if (stats[stat]) {
        return { [stat]: stats[stat] - 1 };
      }
    };

    const updatedStat =
      direction === 'plus' ? increment(stat) : decrement(stat);

    setStats({ ...stats, ...updatedStat });
  };

  const clearSingleStat = (stat: string): void => {
    setStats({ ...stats, [stat]: 0 });
  };

  const clearAllStats = (): void => {
    console.log('Clear stat button clicked');
    setStats(resetAllStats.current);
  };

  //? JSX
  return (
    <View style={styles.container}>
      <View>
        <Text>{statsToCalc[0]}</Text>
        <Text>{statsToCalc[1]}</Text>
      </View>
      {Object.keys(stats).map((stat) => {
        return (
          <View style={styles.mainContent} key={stat}>
            <View style={styles.statContainer}>
              <Text style={styles.categoryText}>{stat}</Text>
              <Text style={styles.statText}>{stats[stat]}</Text>
            </View>
            <View style={styles.incrementIconContainer}>
              <Pressable>
                <AntDesign
                  name="minussquare"
                  size={40}
                  color="#0080C6"
                  onPress={() => statHandler(stat, 'minus')}
                />
              </Pressable>
              <Pressable>
                <AntDesign
                  name="plussquare"
                  size={40}
                  color="#0080C6"
                  onPress={() => statHandler(stat, 'plus')}
                />
              </Pressable>
              <Pressable
                style={styles.clearButton}
                onPress={() => clearSingleStat(stat)}>
                <Text style={styles.clearButtonText}>Clear</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

//? CSS Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  mainContent: {
    width: '100%',
    alignItems: 'center',
  },
  statContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incrementIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  clearButton: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  clearButtonText: {
    fontWeight: '700',
  },
  categoryText: {
    fontSize: 25,
  },
  statText: {
    fontSize: 20,
  },
});
export default StatsPage;
