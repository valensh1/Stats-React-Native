import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from 'expo-router';
import statCategories from '../../../Database/statCategories';
import AntDesign from '@expo/vector-icons/AntDesign';
import StatCalcs from '../../../Database/statCalcs';
import HelperFunctions from '../../../Utils/HelperFunctions';

//! Stat Counter Page
const StatsPage: React.FC = () => {
  //? Variables
  let { sport, position } = useLocalSearchParams<{
    sport: string;
    position: string;
  }>(); // Retrieves and destructures sport and position from the URL
  console.log(
    `This is the sport -> ${sport} and this is the position -> ${position}`
  );
  const navigation = useNavigation();
  sport = sport.toLowerCase();
  position = position.toLowerCase();

  //? UseRef
  let resetAllStats = useRef<{ [key: string]: number }>({});

  //? UseState
  const [stats, setStats] = useState<{ [key: string]: number }>({});
  const [calculatedStats, setCalculatedStats] = useState<{
    [key: string]: number | string;
  }>({});

  //? UseEffect
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${HelperFunctions.capitalizeFirstLetter(position)} Stats`,
    });
    const obj: { [key: string]: number } = {};
    const categories = statCategories[sport][position];
    for (let category of categories) {
      obj[category] = 0;
    }
    console.log(obj);
    resetAllStats.current = { ...obj }; // Sets useRef with all stats at 0 when clear all button is pressed
    setStats(obj); // Sets all the stats related to sport at 0

    const calculatedStatsObj: { [key: string]: number } = {};
    const statsToCalc = statCategories[sport][`${position}Calcs`];
    statsToCalc.forEach((stat) => {
      console.log(`This is each STAT -> ${stat}`);
      calculatedStatsObj[stat] = 0;
    });
    setCalculatedStats(calculatedStatsObj);
  }, []);

  useEffect(() => {
    const statCalcs = new StatCalcs();
    switch (sport) {
      case 'hockey': {
        if (position === 'goalie') {
          const shotsOnGoal = statCalcs.hockey.goalie.shotsOnGoal(
            stats.Goals,
            stats.Saves
          );
          console.log(`This is the shots on goal ${shotsOnGoal}`);

          const savePercentage = statCalcs.hockey.goalie.savePercentage(
            stats.Saves,
            shotsOnGoal
          );
          console.log(`This is the save % ${savePercentage}`);
          setCalculatedStats({
            ...calculatedStats,
            SOG: shotsOnGoal,
            ['Save %']: savePercentage,
          });
        } else if (position === 'skater') {
          //! Need to code the stats for skater here!!!!
          console.log('This is a SKATER DUDE!!!');
          const points = statCalcs.hockey.skater.points(
            stats.Goals,
            stats.Assists
          );
          setCalculatedStats({ ...calculatedStats, points });
        } else {
          console.log(`No position with calculated stats found`);
        }
      }
    }
  }, [stats]);

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
    <View style={styles.overallContainer}>
      <View style={styles.statsCalcs}>
        {Object.keys(calculatedStats).map((stat) => {
          return (
            <View key={stat}>
              <Text key={stat}>{stat}</Text>
              <Text key={`${stat}2`}>{calculatedStats[stat]}</Text>
            </View>
          );
        })}
      </View>
      {Object.keys(stats).map((stat) => {
        return (
          <View style={styles.statCountersContainer} key={stat}>
            <View style={styles.singleStatContainer}>
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
  overallContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Optional for better visibility
  },
  statsCalcs: {
    flex: 1, // Take up equal space
    flexDirection: 'row',
    justifyContent: 'space-around', // Evenly distribute categories
    alignItems: 'center', // Center items vertically
    borderBottomWidth: 1, // Optional: add a separator
    borderColor: '#ccc',
    marginBottom: '10%', // Space between stat categories and stat items
  },
  statCountersContainer: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    marginVertical: 15, // Space between stat items
  },
  singleStatContainer: {
    alignItems: 'center',
    marginBottom: 10, // Space between text and buttons
  },
  incrementIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Wider spacing for buttons
  },
  clearButton: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontWeight: '700',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: '600',
  },
  statText: {
    fontSize: 18,
  },
});
export default StatsPage;
