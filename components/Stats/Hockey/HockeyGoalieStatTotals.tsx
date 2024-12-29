import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HockeyGoalieStatTotals: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Saves</Text>
        <Text>30</Text>
      </View>
      <View>
        <Text>Shots</Text>
        <Text>35</Text>
      </View>
      <View>
        <Text>Save %</Text>
        <Text>85.7%</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    marginTop: '5%',
  },
});
export default HockeyGoalieStatTotals;
