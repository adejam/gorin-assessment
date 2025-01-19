import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import DefaultStyles from '../constants/styles'
import SectionHeading from './section-heading'
import LibraryBookCard, { LibraryBookData } from './library-book-card'


interface LibraryBooksListsProps {
  title: string,
  subtitle: string,
  data: LibraryBookData[]
}

const LibraryBooksLists: React.FC<LibraryBooksListsProps> = ({
  title,
  subtitle,
  data
}) => {
  return (
    <View
      style={styles.container}>
      <SectionHeading
        title={title}
        subTitle={subtitle}
        style={{ marginTop: 40 }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <LibraryBookCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  )
}

export default LibraryBooksLists

const styles = StyleSheet.create({
  container: {
    ...DefaultStyles.paddingX20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    columnGap: 10,
    marginTop: 10,
  }
})
