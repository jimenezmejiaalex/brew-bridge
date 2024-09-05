import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./(tabs)";
import ExploreScreen from "./(tabs)/explore";
import { RootStackParamList } from "@/types";
import RecipeScreen from "./(tabs)/recipe/[id]";
import { Colors } from "@/constants/Colors";
import { Routes } from "@/types/Routes";

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.header.background,
        },
        headerTintColor: "black",
      }}
    >
      <HomeStack.Screen name={Routes.Home} component={HomeScreen} />
      <HomeStack.Screen name={Routes.Explore} component={ExploreScreen} />
      <HomeStack.Screen name={Routes.Recipe} component={RecipeScreen} />
    </HomeStack.Navigator>
  );
}
