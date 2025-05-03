import { View, Text, TextInput, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import colors from '../Styles/Colors';
import { useUserContext } from '../store/context/userContext';
import CustomButton from '../components/CustomButton';

export const CreatePlayerPage = () => {
  const { user, setUser } = useUserContext();

  const onChangeText = (field: string, text: string) => {
    switch (field.toLowerCase()) {
      case 'first name': {
        setUser({ ...user, firstName: text });
      }
      case 'last name': {
        setUser({ ...user, lastName: text });
      }
      case 'team name': {
        setUser({ ...user, teamName: text });
      }
      case 'birth date': {
        setUser({ ...user, birthDate: text });
      }
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Create Player Account</Text>
      <InputField
        label="First Name"
        labelColor={colors.globalSecondaryColor}
        focusedBackgroundColor={colors.globalSecondaryColor}
        onChangeText={(text) => onChangeText('first name', text)}
        additionalStyleProps={{ marginTop: '5%' }}
      />
      <InputField
        label="Last Name"
        labelColor={colors.globalSecondaryColor}
        focusedBackgroundColor={colors.globalSecondaryColor}
        onChangeText={(text) => onChangeText('last name', text)}
        additionalStyleProps={{ marginTop: '5%' }}
      />
      <InputField
        label="Team Name"
        labelColor={colors.globalSecondaryColor}
        focusedBackgroundColor={colors.globalSecondaryColor}
        onChangeText={(text) => onChangeText('team name', text)}
        additionalStyleProps={{ marginTop: '5%' }}
      />
      <InputField
        label="Birth Date"
        labelColor={colors.globalSecondaryColor}
        focusedBackgroundColor={colors.globalSecondaryColor}
        onChangeText={(text) => onChangeText('birth date', text)}
        additionalStyleProps={{ marginTop: '5%' }}
      />
      <View style={styles.button}>
        <CustomButton
          text="Save"
          navigationPath="(tabs)/stats.tsx"
          buttonBackgroundColor={colors.globalSecondaryColor}
          buttonTextColor={colors.globalAlternateColor}
          buttonAdditionalStyleProps={{
            align: 'center',
            width: '90%',
            marginTop: '10%',
          }}
        />
      </View>
    </View>
  );
};
export default CreatePlayerPage;

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    width: '100%',
    top: '10%',
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    color: colors.globalSecondaryColor,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
