import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import DefaultStyles from '../constants/styles'
import CustomButton from './ui/custom-button'

interface AppreciationCardProps {
  title: string
  subtitle: string
  description: string
}

const AppreciationCard: React.FC<AppreciationCardProps> = ({
  title,
  subtitle, description
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>

        <CustomButton
          text="Read More"
          icon={require('../assets/icons/arrow-right.png')}
          style={{ width: 150, minWidth: 113, height: 40, minHeight: 30 }}
          textStyle={{ fontWeight: 500, fontSize: 14 }}
          wrapperStyle={{ marginTop: 15 }}
        />
      </View>
    </View>
  )
}

export default AppreciationCard

const styles = StyleSheet.create({
  container: {
    ...DefaultStyles.paddingX20,
    alignItems: 'center'
  },
  wrapper: {
    ...DefaultStyles.shadow,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 60,
    borderRadius: 20,
  },
  title: {
    ...DefaultStyles.fontLg,
    marginTop: 30,
    fontWeight: 600,
    color: colors.primary,
    lineHeight: 24,
    textAlign: 'center',
  },
  subtitle: {
    ...DefaultStyles.fontLg,
    fontWeight: 600,
    marginTop: 10,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    marginTop: 10,
    width: '95%',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
})
