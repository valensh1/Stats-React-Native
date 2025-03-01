import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface SportIconsProps {
  sport: string;
  iconName: string;
  iconLibrary:
    | 'Iconicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'FontAwesome5'
    | 'FontAwesome6';
}

const SportIcons: React.FC<SportIconsProps> = ({
  sport,
  iconName,
  iconLibrary,
}) => {
  const router = useRouter();

  const sportSelectionHandler = () => {
    router.push(`/sportPositions/${sport}`);
  };

  let IconComponent;
  switch (iconLibrary) {
    case 'Iconicons':
      IconComponent = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    default:
      console.error('Invalid icon library');
      break;
  }

  return (
    <View>
      <Pressable onPress={sportSelectionHandler} style={styles.container}>
        <Text>{sport}</Text>
        <IconComponent name={iconName} size={100} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
});
export default SportIcons;
