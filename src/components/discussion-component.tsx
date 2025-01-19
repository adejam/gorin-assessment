import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import DefaultStyles from '../constants/styles'
import SectionHeading from './section-heading'
import HomePageData from "../data/cms/home";
import AvatarGroup from './avatar-group';
import colors from '../constants/colors';

interface DiscussionComponentCardProps {
  id: number;
  title: string;
  description: string;
  host: string;
  people: any[];
}

const DiscussionComponentCard: React.FC<DiscussionComponentCardProps> = ({
  title,
  people,
  host,
  description,
}) => {
  return (
    <View style={{ marginVertical: 10, paddingVertical: 20, paddingLeft: 20, backgroundColor: '#EBF0F1', borderRadius: 20 }}>
      <View style={styles.cardHeaderSection}>
        <View>
          <Text>{title}</Text>
        </View>

        <View style={styles.cardBadge}>
          <View style={styles.cardBadgeRedDot}></View>
          <Text style={styles.cardBadgeLiveText}>Live</Text>
        </View>
      </View>
      <View style={{ maxWidth: '70%' }}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20, marginTop: 20 }}>
        <Text style={styles.hostText}>By {host}</Text>
        <AvatarGroup avatars={people} />
      </View>
    </View>
  )
}

const DiscussionComponent: React.FC = () => {
  return (
    <View style={DefaultStyles.paddingX20}>
      <SectionHeading title={HomePageData.discussionComponent.headingTitle} style={{ marginTop: 60, marginBottom: 20 }} />
      <FlatList
        data={HomePageData.discussionComponent.data}
        renderItem={({ item }) => <DiscussionComponentCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  )
}

export default DiscussionComponent

const styles = StyleSheet.create({
  cardHeaderSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardBadge: { backgroundColor: '#fff', padding: 10, flexDirection: 'row', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
  cardBadgeRedDot: { width: 9, height: 9, borderRadius: '100%', backgroundColor: colors.primary },
  cardBadgeLiveText: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: 24,
    fontSize: 18,
    marginLeft: 10
  },
  descriptionText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: 24,
    fontSize: 16,
    marginTop: 10
  },
  hostText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: 24,
    fontSize: 14,
    color: '#5E626C'
  }
})
