import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
} from "react-native";
import HomeScreen from "../Screens/home";

const Tab = createBottomTabNavigator();

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
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
