import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface StatButtonProps {
  buttonText: string;
  stats?: () => void;
}

const StatButton = ({ buttonText, stats }: StatButtonProps) => {
  const statHandler = () => {
    if (stats) {
      stats();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={statHandler} style={styles.statButton}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <View style={styles.incrementButtons}>
          <TouchableOpacity>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>+</Text>
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
