import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import DefaultStyles from '../constants/styles';
import ProgressBar from './progress-bar';

interface LibraryBookCardFooterButtonProps {
  image: ImageSourcePropType
  imageWidth: number
  imageHeight: number
  style?: StyleProp<ViewStyle>
}

const LibraryBookCardFooterButton: React.FC<LibraryBookCardFooterButtonProps> = ({
  image,
  style,
  imageHeight,
  imageWidth
}) => {
  return (
    <View style={[styles.libraryBookFooterButton, style]}>
      <Image
        source={image}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text style={styles.libraryBookFooterButtonText}>Audio</Text>
    </View>
  )
}

export interface LibraryBookData {
  id: number,
  title: string;
  image: ImageSourcePropType;
  progress: number;
  duration: string;
}

interface LibraryBookCardProps extends LibraryBookData {
  style?: StyleProp<ViewStyle>;
}

const LibraryBookCard: React.FC<LibraryBookCardProps> = ({
  title,
  image,
  progress,
  style,
  duration,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        {Boolean(progress) ? (
          <ProgressBar progress={progress} />
        ) : (
          <Text style={[styles.durationText, { alignSelf: 'flex-start' }]}>Time to read</Text>
        )}
        <View style={styles.backgroundImageFooter}>
          {Boolean(progress) && (
            <Text style={styles.backgroundImagePercentText}>{progress}%</Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icons/clock.png')}
              style={{ width: 10, height: 10, tintColor: 'white' }}
            />
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.libraryBookTitle}>{title}</Text>

      <View style={styles.libraryBookFooter}>
        <LibraryBookCardFooterButton
          image={require('../assets/icons/headset.png')}
          style={{ marginRight: 10 }}
          imageHeight={10}
          imageWidth={10.67}
        />

        <LibraryBookCardFooterButton
          image={require('../assets/icons/video.png')}
          style={{ marginRight: 10 }}
          imageHeight={10}
          imageWidth={16}
        />
      </View>
    </View>
  );
};

export default LibraryBookCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  backgroundImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 155,
    paddingHorizontal: 18,
    paddingBottom: 10,
    height: 225
  },
  backgroundImageFooter: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  backgroundImagePercentText: {
    ...DefaultStyles.fontSm,
    fontWeight: 500,
    color: '#fff',
  },
  durationText: {
    ...DefaultStyles.fontSm,
    fontWeight: 400,
    color: '#fff',
    marginLeft: 4,
  },
  libraryBookTitle: {
    ...DefaultStyles.fontSm,
    fontWeight: 400,
    color: '#00000',
    marginTop: 10,
    fontSize: 18,
    letterSpacing: -0.49,
    textTransform: 'capitalize',
  },
  libraryBookFooter: {
    marginTop: 15,
    flexDirection: 'row',
  },

  libraryBookFooterButton: {
    ...DefaultStyles.bgGray,
    flex: 1,
    padding: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  libraryBookFooterButtonText: {
    ...DefaultStyles.textMuted,
    fontFamily: 'Poppins',
    marginLeft: 5,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
  },
});
