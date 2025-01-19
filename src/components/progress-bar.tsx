import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import DefaultStyles from '../constants/styles'

interface ProgressBarProps {
  progress: number;
  style?: StyleProp<ViewStyle>;
}

const ProgressBar = ({
  progress,
  style,
}: ProgressBarProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.progressStatus, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    ...DefaultStyles.bgGray,
    backgroundColor: '#ebf0f166',
    width: '100%',
    height: 6,
    maxWidth: 119,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressStatus: {
    height: '100%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
