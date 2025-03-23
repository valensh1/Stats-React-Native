import { View } from 'react-native';
import SportIcons from '../components/SportIcons';

export const LandingPage = () => {
  return (
    <View>
      <SportIcons
        sport="Baseball"
        iconName="baseball-bat"
        iconLibrary="MaterialCommunityIcons"
      />
      <SportIcons
        sport="Basketball"
        iconName="basketball-outline"
        iconLibrary="Iconicons"
      />
      <SportIcons
        sport="Football"
        iconName="american-football-outline"
        iconLibrary="Iconicons"
      />
      <SportIcons
        sport="Hockey"
        iconName="sports-hockey"
        iconLibrary="MaterialIcons"
      />
    </View>
  );
};
export default LandingPage;
