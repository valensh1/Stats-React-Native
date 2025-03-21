import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import colors from '../Styles/Colors';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dateSelectionHandler = (event: any, selectedDate?: Date) => {
    if (event?.type === 'set' && selectedDate) {
      setDate(selectedDate);
    } else if (event?.type === 'dismissed') {
      console.log('User dismissed the date picker.');
    }
    setShowDatePicker(false);
  };

  return (
    <View style={styles.overallContainer}>
      <Text>Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.inputContainerStyle}>
        <Text style={styles.textStyle}>{date.toString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode={'date'}
          value={date}
          onChange={dateSelectionHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    // opacity: 0, // Takes space but invisible
    // display: 'none' // DOES NOT take space and is invisible
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.globalSecondaryColor,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
  textStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default DatePicker;
