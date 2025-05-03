// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import colors from '../../Styles/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // Hide the (tabs) title
        tabBarStyle: { backgroundColor: colors.globalSecondaryColor },
        headerStyle: { backgroundColor: colors.globalSecondaryColor },
        headerTitleStyle: {
          color: colors.globalAlternateColor,
          fontWeight: '700',
          fontSize: 20,
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.globalAlternateColor,
      }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="stats" options={{ title: 'Stats' }} />
      <Tabs.Screen name="account" options={{ title: 'Account' }} />
    </Tabs>
  );
}
