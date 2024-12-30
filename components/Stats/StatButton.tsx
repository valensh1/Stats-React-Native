import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface StatButtonProps {
  buttonText: string;
  stats?: (stat: string) => void;
}

const StatButton = ({ buttonText, stats }: StatButtonProps) => {
  const statHandler = (stat: string) => {
    if (stats) {
      stat === 'increment' ? stats('increment') : stats('decrement');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonTitle}>{buttonText}</Text>
      <TouchableOpacity style={styles.statButton}>
        <View style={styles.incrementButtonContainer}>
          <TouchableOpacity
            onPress={() => statHandler('decrement')}
            style={styles.incrementButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => statHandler('increment')}
            style={styles.incrementButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginTop: '5%',
    width: '50%',
  },
  statButton: {
    width: '50%',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  incrementButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  incrementButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    color: 'white',
    width: '50%',
    margin: 5,
  },
});
export default StatButton;
