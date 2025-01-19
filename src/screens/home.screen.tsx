import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultStyles from "../constants/styles";
import TopNav from "../components/top-nav";
import HomePageData from "../data/cms/home";
import HomeSlideView from "../components/home-slide-view";
import FeaturesTab from "../components/features-tab";
import QouteComponent from "../components/qoute-component";
import BookList from "../components/books-list";
import CTAComponent from "../components/cta-component";
import AppreciationCard from "../components/appreciation-card";
import LibraryBooksLists from "../components/library-books-lists";
import DiscussionComponent from "../components/discussion-component";
import SectionHeading from "../components/section-heading";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      {HomePageData.topNav && (
        <TopNav
          style={DefaultStyles.marginTop10}
        />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 100 }}>
          {HomePageData.slideView && (
            <HomeSlideView data={HomePageData.slideView.data} />
          )}
          {HomePageData.featuresList && (
            <FeaturesTab
              style={{ paddingHorizontal: 20 }}
              items={HomePageData.featuresList}
            />
          )}
          {HomePageData.libraryBooks && (
            <LibraryBooksLists title={HomePageData.libraryBooks.title}
              subtitle={HomePageData.libraryBooks.subTitle}
              data={HomePageData.libraryBooks.data}
            />
          )}
          {HomePageData.qouteComponent && (
            <QouteComponent data={HomePageData.qouteComponent} />
          )}

          {/* {HomePageData?.audioBooksSection && (
            <View style={DefaultStyles.paddingX20}>
              <SectionHeading title={HomePageData.audioBooksSection.headingTitle} style={{ marginTop: 60, marginBottom: 20 }} />
              <FlatList
                data={HomePageData.audioBooksSection.data}
                renderItem={({ item }) => {
                  return (
                    <View style={{ position: 'relative', height: 273, padding: 4 }}>
                      <View style={{ backgroundColor: '#fff', marginTop: 'auto', width: 157.43, borderRadius: 20, height: 167.43, padding: 20, ...DefaultStyles.shadow }}>
                        <Image
                          source={item.image}
                          style={{ position: 'absolute', left: '15%', top: -60, zIndex: 99999 }}
                        />
                        <View style={{ marginTop: 80 }}>
                          <Text>{item.title}</Text>
                          <Text style={{ marginTop: 5 }}>{item.subtitle}</Text>
                          <Text style={{ marginTop: 5 }}>{item.sessions} session</Text>
                        </View>
                      </View>
                    </View>
                  )
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
              />
            </View>
          )} */}

          {HomePageData.discussionComponent && (
            <DiscussionComponent />
          )}

          {HomePageData.booksListComponent && (
            <BookList headingTitle={HomePageData.booksListComponent.headingTitle}
              data={HomePageData.booksListComponent.data} />
          )}

          {HomePageData.CTAComponent && (
            <CTAComponent ctaText={HomePageData.CTAComponent.ctaText} />
          )}
          {HomePageData.appreciationComponent && (
            <AppreciationCard
              title={HomePageData.appreciationComponent.title}
              subtitle={HomePageData.appreciationComponent.subtitle}
              description={HomePageData.appreciationComponent.description}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: { flex: 1 },
  centerPadding: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
