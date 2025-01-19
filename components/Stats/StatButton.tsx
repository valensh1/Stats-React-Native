import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface StatButtonProps {
  buttonText: string;
  stats?: (direction: string, stat: string) => void;
}

const StatButton = ({ buttonText, stats }: StatButtonProps) => {
  const statHandler = (direction: string, stat: string) => {
    if (stats) {
      stats(direction, stat);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      <View style={styles.incrementButtons}>
        <TouchableOpacity
          onPress={() => statHandler('decrement', buttonText)}
          style={styles.statButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => statHandler('increment', buttonText)}
          style={styles.statButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  statButton: {
    backgroundColor: 'orange',
    minHeight: '30%',
    minWidth: '30%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  incrementButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
  },
});
export default StatButton;
