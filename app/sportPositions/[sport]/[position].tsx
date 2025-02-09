import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from 'expo-router';
import statCategories from '../../../Database/statCategories';
import AntDesign from '@expo/vector-icons/AntDesign';
import StatCalcs from '../../../Database/statCalcs';
import HelperFunctions from '../../../Utils/HelperFunctions';
import ConfirmModal from '../../../components/ConfirmModal';

//! Stat Counter Page
const StatsPage: React.FC = () => {
  //? Variables
  // Retrieves and destructures sport and position from the URL
  let { sport, position } = useLocalSearchParams<{
    sport: string;
    position: string;
  }>();
  sport = sport.toLowerCase();
  position = position.toLowerCase();
  console.log(
    `This is the sport -> ${sport} and this is the position ${position}`
  );
  const navigation = useNavigation();

  //? UseRef
  let resetAllStats = useRef<{ [key: string]: number }>({});

  //? UseState
  const [stats, setStats] = useState<{ [key: string]: number }>({});
  const [calculatedStats, setCalculatedStats] = useState<{
    [key: string]: number | string;
  }>({});
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  //? UseEffect
  // Initial Loading of Stat Counter page code
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${HelperFunctions.capitalizeFirstLetter(position)} Stats`,
    });
    const obj: { [key: string]: number } = {};
    const categories = statCategories[sport][position];
    for (let category of categories) {
      obj[category.toLowerCase()] = 0;
    }
    console.log(obj);
    resetAllStats.current = { ...obj }; // Sets useRef with all stats at 0 when clear button is pressed
    setStats(obj); // Sets all the stats related to sport at 0

    const calculatedStatsObj: { [key: string]: number } = {};
    const statsToCalc = statCategories[sport][`${position}Calcs`];
    statsToCalc.forEach((stat) => {
      console.log(`This is each STAT -> ${stat}`);
      calculatedStatsObj[stat.toLowerCase()] = 0;
    });
    setCalculatedStats(calculatedStatsObj);
  }, []);

  useEffect(() => {
    const statCalcs = new StatCalcs();
    switch (sport) {
      case 'hockey': {
        if (position === 'goalie') {
          const shotsOnGoal = statCalcs.hockey.goalie.shotsOnGoal(
            stats.goals,
            stats.saves
          );
          console.log(`This is the shots on goal ${shotsOnGoal}`);

          const savePercentage = statCalcs.hockey.goalie.savePercentage(
            stats.saves,
            shotsOnGoal
          );
          console.log(`This is the save % ${savePercentage}`);
          setCalculatedStats({
            ...calculatedStats,
            sog: shotsOnGoal,
            ['save %']: savePercentage,
          });
        } else if (position === 'skater') {
          const points = statCalcs.hockey.skater.hockeyPoints(
            stats.goals,
            stats.assists
          );
          setCalculatedStats({ ...calculatedStats, points });
        } else {
          console.log(`NO POSITION WITH CALCULATED STATS FOUND!!!`);
        }
        break;
      }
      case 'basketball': {
        setCalculatedStats({
          ...calculatedStats,
          PTS: statCalcs.basketballPoints(stats.fg, stats['3pt'], stats.ft),
          AST: stats.assists,
          REB: stats.rebounds,
          STL: stats.steals,
          BLK: stats.blocks,
        });
        break;
      }
      default:
        console.log(`No sport of ${sport} found!!!`);
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
    setStats(resetAllStats.current);
  };

  const gameOver = (): void => {
    console.log('Game over tapped');
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = (): void => {
    console.log('Close modal was tapped');
    setIsModalVisible(!isModalVisible);
  };

  //? JSX
  return (
    <View style={styles.overallContainer}>
      {/* CALCULATION SECTION */}
      <View style={styles.statsCalcs}>
        {Object.keys(calculatedStats).map((stat) => {
          return (
            <View key={stat}>
              <Text key={stat} style={styles.calculatedStatCategoryText}>
                {stat.toUpperCase()}
              </Text>
              <Text key={`${stat}2`} style={styles.calculatedStatText}>
                {calculatedStats[stat]}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.gameControls}>
        <Pressable>
          <Text style={styles.gameControlButton} onPress={clearAllStats}>
            CLEAR ALL
          </Text>
        </Pressable>
        <ConfirmModal buttonText="Game Over" />
      </View>
      <ScrollView style={styles.statsContainerScrollContainer}>
        {/* STATS SECTION */}
        {Object.keys(stats).map((stat) => {
          return (
            <View style={styles.statCountersContainer} key={stat}>
              <View style={styles.singleStatContainer}>
                <Text style={styles.statCategoryText}>
                  {stat.toUpperCase()}
                </Text>
                <Text style={styles.statText}>{stats[stat]}</Text>
              </View>
              <View style={styles.incrementIconContainer}>
                <Pressable>
                  <AntDesign
                    name="minussquare"
                    size={35}
                    color="#0080C6"
                    onPress={() => statHandler(stat, 'minus')}
                  />
                </Pressable>
                <Pressable>
                  <AntDesign
                    name="plussquare"
                    size={35}
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
      </ScrollView>
    </View>
  );
};

//? CSS Styling
const styles = StyleSheet.create({
  overallContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  statsCalcs: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: '3%',
    backgroundColor: '#0080C6',
    padding: 7,
  },
  calculatedStatCategoryText: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
  },
  calculatedStatText: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
  },
  gameControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  gameControlButton: {
    color: 'red',
    fontWeight: 800,
  },
  statsContainerScrollContainer: {
    flexGrow: 1,
  },
  statCountersContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  singleStatContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  incrementIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
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
    fontSize: 12,
  },
  statCategoryText: {
    fontSize: 15,
    fontWeight: '600',
  },
  statText: {
    fontSize: 18,
  },
});
export default StatsPage;
