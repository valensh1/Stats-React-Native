import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stats from '../../../components/Stats/Stats';

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
