import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import IconButton, { IconButtonData } from './ui/icon-button';

interface FeaturesProps {
  items: IconButtonData[];
  style?: StyleProp<ViewStyle>;
}

const FeaturesTab: React.FC<FeaturesProps> = ({ items, style }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return <View style={[styles.container, style]}>
    {items?.map((item, index) => (
      <IconButton
        key={index}
        data={item}
        isFocused={currentIndex === index}
        onPress={() => {
          setCurrentIndex(index);
        }}
      />
    ))}
  </View>;
};

export default FeaturesTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
