import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import DefaultStyles from '../constants/styles'
import colors from '../constants/colors'

interface QouteComponentProps {
  data: {
    author: string
    quote: string
  }
}

const QouteComponent: React.FC<QouteComponentProps> = ({ data: { author, quote } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View
          style={styles.cardImageWrapper}>
          <Image
            source={require('../assets/icons/quote.png')}
            style={{ width: 17, height: 15, tintColor: 'white' }}
          />
        </View>

        <Text style={styles.quoteText}>
          {quote}
        </Text>
        <Image
          style={styles.cardQuoteUnderlayImage}
          source={require('../assets/icons/quote_down.png')}
        />
        <Text style={styles.quoteAuthor}>- {author}</Text>
      </View>
    </View>
  )
}

export default QouteComponent

const styles = StyleSheet.create({
  container: {
    ...DefaultStyles.bgGray,
    paddingHorizontal: 20,
    minHeight: 345,
    marginTop: 18,
    width: '100%',
  },
  card: {
    ...DefaultStyles.shadow,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginVertical: 40,
    minHeight: 270,
    borderRadius: 10,
  },
  cardImageWrapper: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginTop: 20,
    borderRadius: 10,
  },
  cardQuoteUnderlayImage: {
    width: 127,
    height: 103,
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: -10,
  },
  quoteText: {
    marginTop: 20,
    fontFamily: 'Prata',
    fontSize: 14,
    color: '#000',
    lineHeight: 26,
  },
  quoteAuthor: {
    ...DefaultStyles.fontNormal,
    textTransform: 'capitalize',
    // fontFamily: 'Prata',
    fontWeight: 400,
    position: 'relative',
    color: '#000000',
    marginTop: 20,
    lineHeight: 24,
  },
})