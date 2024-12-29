import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import Stats from '../../../components/Stats/Stats';
import HockeyGoalieStats from '../../../components/Stats/Hockey/HockeyGoalieStatTotals';

const StatsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Stats />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default StatsPage;
