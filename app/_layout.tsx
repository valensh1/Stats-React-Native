import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Choose Sport',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/index"
        options={{
          headerTitle: 'Choose Position',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/[...position]"
        options={{
          headerTitle: 'Stats',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
};
export default RootLayout;
