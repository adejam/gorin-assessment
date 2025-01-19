import { View, Text, Animated, ViewToken, StyleSheet, useWindowDimensions, ImageBackground, ImageSourcePropType } from 'react-native'
import React, { useRef, useState } from 'react'
import { FlatList } from 'react-native'
import colors from '../constants/colors'

export interface SlideImageCardProps {
  id: number
  image: ImageSourcePropType
  title: string
  date: string
  description: string
}

export const SlideImageCard = ({
  title, date, description, image
}: SlideImageCardProps) => {
  const { width } = useWindowDimensions()

  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, { width }]}>
      <ImageBackground
        style={[styles.slideImage, { width: 335 }]}
        source={image}
      >
        <Text style={styles.slideImageTitle}>{title}</Text>
        <Text style={styles.slideImageDate}>{date}</Text>
        <Text style={styles.slideImageSubtitle}>{description}</Text>
      </ImageBackground>
    </View>
  )
}


const Paginator = ({ data, scrollX }: { data: SlideImageCardProps[], scrollX: Animated.Value }) => {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.dotsContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })
        return (
          <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
        )
      })}
    </View>
  )
}


const HomeSlideView = ({ data }: { data: SlideImageCardProps[] }) => {
  const [_currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const slideRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }: {
    viewableItems: ViewToken<SlideImageCardProps>[]
  }) => {
    setCurrentSlideIndex(viewableItems[0].index ?? 0)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <SlideImageCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={
          Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })
        }
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Paginator data={data} scrollX={scrollX} />
    </>
  )
}

export default HomeSlideView

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    marginTop: 20.25,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 5
  },
  slideImage: {
    height: 193.5,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 30.68,
    maxWidth: 335,
    flex: 0.7
  },
  slideImageTitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: 'white',
    lineHeight: 26,
    fontSize: 22,
  },
  slideImageDate: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
  },
  slideImageSubtitle: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    lineHeight: 26,
  },
})
