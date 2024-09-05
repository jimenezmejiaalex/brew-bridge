import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { get } from "@/lib/api";
import { CoffeeDto, MethodDto, RecipeDto } from "@/types";
import { getImage } from "@/utils/ImagesUtil";
import { DEFAULT_IMAGE_URL } from "@/constants/Images";
import { Tabs, useNavigation, useRouter } from "expo-router";
import { Routes } from "@/constants/Routes";
import Screen from "@/components/Screen";
import Loading from "@/components/Loading";

export default function HomeScreen() {
  const [recipes, setRecipies] = useState<Array<RecipeDto>>([]);
  const [coffeeMethods, setCoffeeMethods] = useState<Array<MethodDto>>([]);
  const [coffeeProducts, setCoffeeProducts] = useState<Array<CoffeeDto>>([]);

  const [loading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const navigation = useNavigation();

  useEffect(() => {
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

    Promise.all([fillMethods(), fillProducts(), fillRecipes()]).then(() =>
      setIsLoading(false)
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Screen>
      <ScrollView>
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
                imageSrc={getImage(item.brewMethod.methodImage)}
                onPress={() =>
                  router.push({
                    pathname: `${Routes.Recipe.path}`,
                    params: { id: item.id, title: item.name },
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
                imageSrc={getImage(item.methodImage)}
                onPress={() =>
                  router.navigate({
                    pathname: `${Routes.Recipe.path}`,
                    params: { id: item.id, title: item.name },
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
                imageSrc={DEFAULT_IMAGE_URL}
                onPress={() =>
                  router.navigate({
                    pathname: `${Routes.Recipe.path}`,
                    params: { id: item.id, title: item.name },
                  })
                }
              />
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
