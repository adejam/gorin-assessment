import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import DefaultStyles from '../constants/styles';
import colors from '../constants/colors';

interface SectionHeadingProps {
  title: string;
  subTitle?: string;
  buttonText?: string;
  style?: StyleProp<ViewStyle>;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  style,
  subTitle,
  buttonText = 'View more',
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={[styles.subtitle, { color: colors.primary }]}>{subTitle}</Text>}
      </View>
      {buttonText && (
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.button}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleWrapper: { flexDirection: 'row', alignItems: 'center' },
  title: {
    ...DefaultStyles.fontLg,
    color: '#000',
    fontWeight: 600,
    lineHeight: 24,
  },
  button: {
    ...DefaultStyles.fontMd,
    ...DefaultStyles.textMuted,
    fontWeight: 500,
    marginLeft: 5,
    lineHeight: 24,
  },
  subtitle: {
    ...DefaultStyles.fontSm,
    fontWeight: 500,
    lineHeight: 18,
  },
});
