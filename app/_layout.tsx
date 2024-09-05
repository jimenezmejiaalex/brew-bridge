import "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStack";
import ExploreStackScreen from "./ExploreStack";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  const Tab = createBottomTabNavigator();

  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: "black",
    //     tabBarInactiveTintColor: "gray",
    //   }}
    // >
    //   <Tab.Screen
    //     name="HomeStack"
    //     component={HomeStackScreen}
    //     options={{
    //       tabBarLabel: ({ focused }) => (
    //         <Text
    //           style={{
    //             fontWeight: focused ? "bold" : "normal",
    //             color: focused ? "black" : "gray",
    //           }}
    //         >
    //           Home
    //         </Text>
    //       ),
    //       tabBarIcon: ({ focused }) => (
    //         <Feather
    //           name="coffee"
    //           size={24}
    //           color={focused ? "black" : "gray"}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="ExploreStack"
    //     component={ExploreStackScreen}
    //     options={{
    //       tabBarLabel: ({ focused }) => (
    //         <Text
    //           style={{
    //             fontWeight: focused ? "bold" : "normal",
    //             color: focused ? "black" : "gray",
    //           }}
    //         >
    //           Explore
    //         </Text>
    //       ),
    //       tabBarIcon: ({ focused }) => (
    //         <Ionicons
    //           name="code"
    //           size={24}
    //           color={focused ? "black" : "gray"}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    <Stack></Stack>
  );
}
