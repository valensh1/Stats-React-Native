import { Stack } from 'expo-router';
import colors from '../Styles/Colors';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.globalBackgroundColor },
        headerStyle: { backgroundColor: colors.globalSecondaryColor },
        headerTitleAlign: 'center',
        headerBackTitle: 'Back',
        headerTitleStyle: {
          color: colors.globalAlternateColor,
          fontWeight: 700,
          fontSize: 20,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Log In',
        }}
      />
      <Stack.Screen
        name="landing-page"
        options={{
          headerTitle: 'Choose Sport',
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: 'Signup',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/index"
        options={{
          headerTitle: 'Choose Position',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/[position]"
        options={{
          headerTitle: 'Stats',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/historical_stats"
        options={{
          headerTitle: 'Career Stats',
        }}
      />
    </Stack>
  );
};
export default RootLayout;
