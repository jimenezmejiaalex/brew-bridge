import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExploreScreen from "./(tabs)/explore";
import HomeScreen from "./(tabs)";
import { RootStackParamList } from "@/types";
import { Routes } from "@/types/Routes";
import { Colors } from "@/constants/Colors";

export default function ExploreStackScreen() {
  const ExploreStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.header.background,
        },
        headerTintColor: "black",
      }}
    >
      <ExploreStack.Screen name={Routes.Explore} component={ExploreScreen} />
      <ExploreStack.Screen name={Routes.Home} component={HomeScreen} />
    </ExploreStack.Navigator>
  );
}
