import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const HistoricalPlayerStats = () => {
  const placeholderText = '#FFD700';
  const router = useRouter();
  console.log('Router Params:', router.params);
  const { fg } = router.params;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Game Location</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Home Team Final Score</Text>
        <TextInput
          placeholderTextColor={placeholderText}
          style={styles.numberInput}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabels}>Visiting Team Final Score</Text>
        <TextInput
          placeholderTextColor={placeholderText}
          style={styles.numberInput}></TextInput>
      </View>
      {/* <Text>{fg}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0080C6',
    height: '100%',
  },
  inputContainer: {
    margin: 25,
  },
  inputLabels: {
    color: 'white',
    position: 'relative',
  },
  textInput: {
    backgroundColor: '#0080C6',
    color: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 2,
    shadowColor: '#0080C6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
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
