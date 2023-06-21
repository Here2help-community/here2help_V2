import {
  Text,
  View,
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "../Screens/home";

import ProfileScreen from "../Screens/profile/profile";
// import FeedbackScreen from "../Screens/profile/submit";
// import SubmitScreen from "../Screens/profile/settings";
// import Terms_component from "../Screens/profile/terms";
// import PrivacyScreen from "../Screens/profile/privacy";


const Tab = createBottomTabNavigator();
const ScreenConstant = createStackNavigator();

function Profile_component() {
  return (
    <ScreenConstant.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ScreenConstant.Screen name="profile" component={ProfileScreen} />
      {/* <ScreenConstant.Screen name="feedback" component={FeedbackScreen} />
      <ScreenConstant.Screen name="submit" component={SubmitScreen} />
      <ScreenConstant.Screen name="terms" component={Terms_component} />
      <ScreenConstant.Screen name="privacy" component={PrivacyScreen} /> */}
    </ScreenConstant.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingsScreen </Text>
      
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen  name="home" component={HomeScreen} />
      <Tab.Screen name="settings" component={SettingsScreen} />
      <Tab.Screen name="profile" component={Profile_component} />
    </Tab.Navigator>
  );
}
