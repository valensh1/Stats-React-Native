import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from '../Styles/Colors';

const DatePicker = () => {
  const [selected, setSelected] = useState('');
  const [dateSelected, setDateSelected] = useState<boolean>(false);

  const dateSelectionHandler = (day: string) => {
    setSelected(day);
  };

  const isDatePickedHandlder = () => {
    setDateSelected(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={isDatePickedHandlder}>
        <TextInput style={styles.textInput}>
          <Calendar
            // onDayPress={(day: { dateString: string }) => {
            //   setSelected(day.dateString);
            // }}
            onDayPress={(day: { dateString: string }) =>
              dateSelectionHandler(day.dateString)
            }
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            style={styles.calendar}
          />
        </TextInput>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  calendar: {
    display: 'none',
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
});

export default DatePicker;
