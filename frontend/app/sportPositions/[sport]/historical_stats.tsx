import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../Styles/Colors';
import DatePicker from '../../../components/DatePicker';

const HistoricalPlayerStats: React.FC = () => {
  const placeholderText = '#FFD700';

  // State Types
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Team Name</Text>
        <TextInput
          style={[styles.textInput, isFocused && styles.focusedState]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {/* Date Picker Section */}
      <View style={styles.inputContainer}>
        <DatePicker />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Home Team Final Score</Text>
        <TextInput
          placeholderTextColor={placeholderText}
          style={styles.numberInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Visiting Team Final Score</Text>
        <TextInput
          placeholderTextColor={placeholderText}
          style={styles.numberInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0080C6',
    height: '100%',
  },
  inputContainer: {
    margin: 10,
    marginHorizontal: 15,
    width: '90%',
  },
  inputLabels: {
    color: 'dark blue',
    position: 'relative',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 15,
  },
  focusedState: {
    backgroundColor: colors.globalSecondaryColor,
    color: colors.globalAlternateColor,
    fontWeight: 600,
  },
  textInput: {
    color: colors.globalSecondaryColor,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 10,
    borderColor: colors.globalSecondaryColor,
    borderWidth: 2,
  },
  numberInput: {
    backgroundColor: '#0080C6',
    color: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 2,
    width: '15%',
  },
});

export default HistoricalPlayerStats;
