import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#0080C6' },
      }}>
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
        name="sportPositions/[sport]/[position]"
        options={{
          headerTitle: 'Stats',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="sportPositions/[sport]/historical_stats"
        options={{
          headerTitle: 'Career Stats',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
};
export default RootLayout;
