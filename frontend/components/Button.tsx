import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../Styles/Colors';

interface ButtonComponent {
  text: string;
  navigationPath: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

const { height } = Dimensions.get('window');

const Button = ({
  text,
  navigationPath,
  buttonBackgroundColor,
  buttonTextColor,
}: ButtonComponent) => {
  const router = useRouter();

  //? USE STATE

  //? FUNCTIONS
  const navigationOnButtonPress = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonBackgroundColor },
      ]}
      onPress={() => navigationOnButtonPress(navigationPath)}>
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
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default Button;
