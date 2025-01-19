import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import React from 'react';
import HomePageData from "../data/cms/home";

interface TopNavProps {
  style?: StyleProp<ViewStyle>;
}

const TopNav: React.FC<TopNavProps> = ({
  style,
}) => {
  return (
    <View style={[styles.TopNav, style]}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={styles.brandImage}
          source={HomePageData.topNav.brandIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={styles.hamburgerImage}
          source={HomePageData.topNav.hamburgerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  TopNav: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  brandImage: {
    width: 27,
    height: 34,
  },
  hamburgerImage: {
    width: 35,
    height: 34,
  },
});
