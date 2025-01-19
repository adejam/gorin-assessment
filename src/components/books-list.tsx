import { View, Text, StyleProp, ViewStyle, ImageSourcePropType, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DefaultStyles from "../constants/styles";
import SectionHeading from './section-heading';
import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

interface BookData {
  id: number,
  title: string
  description: string
  image: ImageSourcePropType
  totalSession: number
}

interface BookProps extends BookData {
  style?: StyleProp<ViewStyle>
}

const Book: React.FC<BookProps> = ({
  style,
  image,
  title,
  description,
  totalSession
}) => {
  return (
    <View style={[styles.bookContainer, style]}>
      <View style={styles.bookImageWrapper}>
        <Image source={image} style={styles.bookImage} />
      </View>
      <View style={[styles.detailsSection]}>
        <Text style={styles.topic} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {description}
        </Text>
        <View style={styles.bookInfoContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/icons/bookmark.png')}
              style={{ width: 10, height: 15 }}
            />
            <Text style={styles.totalSessionText}>{totalSession} session</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.readButton}>
              <Text style={styles.readBtnText}>Read</Text>
              <Image
                source={require('../assets/icons/arrow_right_color.png')}
                style={styles.readButtonImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

interface BookListProps {
  headingTitle: string
  data: BookData[]
}

const BookList: React.FC<BookListProps> = ({ headingTitle, data }) => {
  return (
    <View style={DefaultStyles.paddingX20}>
      <SectionHeading title={headingTitle} style={{ marginTop: 60 }} />

      <FlatList
        data={data}
        renderItem={({ item }) => <Book {...item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />

    </View>
  )
}

export default BookList

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  bookImageWrapper: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    ...DefaultStyles.shadow
  },
  bookImage: {
    width: 81.01,
    height: 80,
  },

  detailsSection: {
    marginLeft: 20,
    flex: 1,
    paddingTop: 10,
  },

  topic: {
    ...DefaultStyles.fontNormal,
    fontWeight: 500,
    color: '#000',
    lineHeight: 24,
    letterSpacing: -0.43,
  },
  subtopic: {
    ...DefaultStyles.textMuted,
    ...DefaultStyles.fontMd,
    fontWeight: 500,
    marginTop: 5,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
  bookInfoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalSessionText: {
    ...DefaultStyles.textMuted,
    ...DefaultStyles.fontMd,
    fontWeight: 500,
    marginLeft: 10,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
  readButton: { flexDirection: 'row', alignItems: 'center' },
  readBtnText: {
    ...DefaultStyles.fontMd,
    fontWeight: 500,
    color: colors.primary,
    marginRight: 10,
    lineHeight: 21,
    letterSpacing: -0.43,
  },
  readButtonImage: { width: 20, height: 10, tintColor: colors.primary }
});
