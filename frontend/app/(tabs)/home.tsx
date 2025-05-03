import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import SportIcons from '../../components/SportIcons';
import colors from '../../Styles/Colors';
import { useUserContext } from '../../store/context/userContext';
import { useContext } from 'react';
import { useRouter } from 'expo-router';

export const HomePage = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const [isUserAccountSetup, setIsUserAccountSetup] = useState(
    user?.displayName ? true : false
  );

  useEffect(() => {
    if (!isUserAccountSetup) {
      router.push(`createPlayerPage`);
    }
  }, []);

  return (
    <View style={styles.pageContainer}>
      <Text>Home page</Text>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colors.globalBackgroundColor,
    height: '100%',
    width: '100%',
  },
});
