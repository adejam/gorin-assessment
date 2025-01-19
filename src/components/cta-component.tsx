import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import DefaultStyles from '../constants/styles'
import CustomButton from './ui/custom-button'

interface CTAComponentProps {
  ctaText: string
}

const CTAComponent: React.FC<CTAComponentProps> = ({ ctaText, }) => {
  return (
    <View
      style={styles.container}>
      <ImageBackground
        style={styles.ctaBgImage}
        source={require('../assets/images/cta-background.png')}>
        <Text style={styles.text}>
          {ctaText}
        </Text>

        <CustomButton text="Share Shiurim" style={{ marginTop: 40 }} />
        <CustomButton
          text="Donation"
          style={{
            marginTop: 40,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
          }}
        />
      </ImageBackground>
    </View>
  )
}

export default CTAComponent

const styles = StyleSheet.create({
  container: {
    ...DefaultStyles.paddingX20,
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    marginTop: 60,
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    color: 'white',
  },
  ctaBgImage: { height: 382, width: 335, paddingHorizontal: 20 }
})
