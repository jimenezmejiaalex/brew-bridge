import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Card from "@/components/Card";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { get } from "@/lib/api";
import { CoffeeDto, HomeScreenProps, MethodDto, RecipeDto } from "@/types";
import { getImage } from "@/utils/ImagesUtil";
import { DEFAULT_IMAGE_URL } from "@/constants/Images";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [recipes, setRecipies] = useState<Array<RecipeDto>>([]);
  const [coffeeMethods, setCoffeeMethods] = useState<Array<MethodDto>>([]);
  const [coffeeProducts, setCoffeeProducts] = useState<Array<CoffeeDto>>([]);

  const [loading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const fillRecipes = async () =>
    get("/recipe/all")
      .then((json) => json.data)
      .then((data) => setRecipies(data as RecipeDto[]));

  const fillMethods = async () =>
    get("/coffee/method/all")
      .then((json) => json.data)
      .then((data) => setCoffeeMethods(data as MethodDto[]));

  const fillProducts = async () =>
    get("/coffee/product/all")
      .then((json) => json.data)
      .then((data) => setCoffeeProducts(data as CoffeeDto[]));

  useEffect(() => {
    Promise.all([fillMethods(), fillProducts(), fillRecipes()]).then(() =>
      setIsLoading(false)
    );
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loading) {
      await SplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading) {
    return (
      <View
        className="flex-1 items-center justify-center"
        onLayout={onLayoutRootView}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-4">
        <View className="mt-4 mb-4">
          <SearchBar />
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold">Recipes</Text>
          <FlatList
            className="mt-2"
            contentContainerStyle={{
              flexDirection: "row",
              marginHorizontal: -8,
            }}
            horizontal
            data={recipes}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageUrl={getImage(item.brewMethod.methodImage)}
                onPress={() =>
                  router.navigate("", {
                    id: item.id,
                    title: item.name,
                  })
                }
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold">Methods</Text>
          <FlatList
            className="mt-2"
            contentContainerStyle={{
              flexDirection: "row",
              marginHorizontal: -8,
            }}
            horizontal
            data={coffeeMethods}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageUrl={getImage(item.methodImage)}
                onPress={() =>
                  navigation.navigate("Recipe", {
                    id: item.id,
                    title: item.name,
                  })
                }
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold">Products</Text>
          <FlatList
            className="mt-2"
            contentContainerStyle={{
              flexDirection: "row",
              marginHorizontal: -8,
            }}
            horizontal
            data={coffeeProducts}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageUrl={DEFAULT_IMAGE_URL}
                onPress={() =>
                  navigation.navigate("Recipe", {
                    id: item.id,
                    title: item.name,
                  })
                }
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
