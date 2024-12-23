import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const SportPosition = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <Text>Choose Position</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SportPosition;
