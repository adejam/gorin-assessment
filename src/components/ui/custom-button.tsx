import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import colors from '../../constants/colors';

interface CustomButtonProps {
  onPress?: () => void
  text: string;
  icon?: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  style,
  wrapperStyle,
  textStyle,
  icon = null,
  text
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        {icon && (
          <Image
            source={icon}
            style={{ width: 20, height: 20 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    width: '100%',
    minWidth: 150,
    maxWidth: 294,
    minHeight: 60,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    marginRight: 4,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
  },
});
