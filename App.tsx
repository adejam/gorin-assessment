import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './src/screens/home.screen';
import ProfileScreen from './src/screens/profile.screen';
import { Image, ImageSourcePropType, ImageStyle, Platform, StyleProp, StyleSheet } from 'react-native';
import ClassesScreen from './src/screens/classes.screen';
import GivingScreen from './src/screens/giving.screen';
import React from 'react';
import DefaultStyles from './src/constants/styles';

const Tab = createBottomTabNavigator();

interface BottomTabIconProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  focused: boolean;
  color: string;
  size: number;
};

const TabIcon: React.FC<BottomTabIconProps> = ({ focused, source, style }) => {
  return (
    <Image
      style={[
        styles.tabIcon,
        { tintColor: focused ? '#000000' : '#BDBDBD' },
        style,
      ]}
      source={source}
    />
  );
}

export default function App() {
  const DEFAULT_THEME_LIGHT = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={DEFAULT_THEME_LIGHT}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#BDBDBD',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: (props) => <TabIcon style={{ width: 23, height: 25.83 }} source={require('./src/assets/tabs/home.png')} {...props} />
          }}
        />
        <Tab.Screen
          name="Classes"
          component={ClassesScreen}
          options={{
            tabBarLabel: 'Classes',
            tabBarIcon: (props) => <TabIcon style={{ width: 24 }} source={require('./src/assets/tabs/book.png')} {...props} />
          }}
        />
        <Tab.Screen
          name="Giving"
          component={GivingScreen}
          options={{
            tabBarLabel: 'Giving',
            tabBarIcon: (props) => <TabIcon style={{ width: 31.38 }} source={require('./src/assets/tabs/people.png')} {...props} />
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: (props) => <TabIcon style={{ width: 24 }} source={require('./src/assets/tabs/user.png')} {...props} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 25,
  },
  tabLabel: {
    ...DefaultStyles.fontMd,
    lineHeight: 18,
    fontWeight: 500,
    marginTop: 8,
    textAlign: 'left',
    letterSpacing: -0.4343072772026062,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    shadowColor: '#363853',
    height: 90,
    borderTopWidth: 0,
    paddingTop: 8,
    paddingHorizontal: 46,
    ...Platform.select({
      ios: {
        shadowColor: '#C0C4EA',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.07,
        shadowRadius: 16,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
