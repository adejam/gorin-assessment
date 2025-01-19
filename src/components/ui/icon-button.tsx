import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Styles from '../../constants/styles'

export interface IconButtonData {
  title?: string,
  iconData: {
    icon: ImageSourcePropType
    width: number
    height: number
  }
}

interface IconButtonProps {
  data: IconButtonData;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isFocused?: boolean
}
const IconButton: React.FC<IconButtonProps> = ({
  style,
  onPress,
  data,
  isFocused = false,
  buttonStyle
}) => {
  return (
    <TouchableOpacity style={styles.iconContainer} activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Image
          source={data.iconData.icon}
          style={{ width: data.iconData.width, height: data.iconData.height }}
        />
      </View>
      {data.title && (
        <Text style={[styles.iconText, !(isFocused) && { ...Styles.textMuted, }]}>
          {data.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonCtn: {
    alignItems: 'center',
    width: 'auto',
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...Styles.shadow
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    ...Styles.fontSemiBold,
    fontWeight: 500,
    marginTop: 5,
    color: '#081638',
    lineHeight: 28,
  },
});
