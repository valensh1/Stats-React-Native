import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dateSelectionHandler = (event: any, selectedDate?: Date) => {
    if (event?.type === 'set' && selectedDate) {
      setDate(selectedDate);
    } else if (event?.type === 'dismissed') {
      console.log('User dismissed the date picker.');
    }

    setTimeout(() => setShowDatePicker(false), 0);
  };

  return (
    <View>
      {/* <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text>Pick Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          onChange={dateSelectionHandler}
          mode="date"
          value={date}
        />
      )} */}
      <Text>Date</Text>
      <TouchableOpacity
        onPress={() => console.log('I am touching this')}
        style={styles.datePicker}>
        <RNDateTimePicker
          value={new Date()}
          mode="date"
          display="spinner"
          style={styles.datePicker}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    // opacity: 0, // Takes space but invisible
    // display: 'none' // DOES NOT take space and is invisible
    borderColor: 'red',
    borderWidth: 5,
  },
});

export default DatePicker;
