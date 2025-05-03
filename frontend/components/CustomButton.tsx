import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../Styles/Colors';

interface ButtonComponent {
  text: string;
  navigationPath?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonAdditionalStyleProps?: object;
  buttonFunctionOnPress?: () => void; // Pass in a function to be executed upon button press
}

const { height } = Dimensions.get('window');

const CustomButton = ({
  text,
  navigationPath,
  buttonBackgroundColor,
  buttonTextColor,
  buttonAdditionalStyleProps,
  buttonFunctionOnPress,
}: ButtonComponent) => {
  const router = useRouter();

  //? USE STATE

  //? FUNCTIONS
  const buttonPressHandler = () => {
    if (buttonFunctionOnPress) {
      buttonFunctionOnPress();
      navigationPath
        ? router.push(`${navigationPath}`)
        : console.log('No navigation path provided');
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor:
            buttonBackgroundColor || styles.buttonContainer.backgroundColor,
        },
        buttonAdditionalStyleProps,
      ]}
      onPress={() => buttonPressHandler()}>
      <Text style={[styles.buttonText, { color: buttonTextColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    height: height * 0.05,
    marginTop: height * 0.02,
    borderRadius: 7,
    borderColor: colors.globalSecondaryColor,
    borderWidth: 2,
    backgroundColor: colors.globalSecondaryColor,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default CustomButton;
