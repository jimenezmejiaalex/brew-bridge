import { View, Text, FlatList, ScrollView } from "react-native";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { get } from "@/lib/api";
import { CoffeeDto, EquipmentDto, BrewMethodDto } from "@/types";
import { useRouter } from "expo-router";
import { Routes } from "@/constants/Routes";
import Screen from "@/components/Screen";
import Loading from "@/components/Loading";
import Separator from "@/components/Separator";

export default function HomeScreen() {
  const [recipes, setRecipies] = useState<Array<BrewMethodDto>>([]);
  const [coffeeMethods, setCoffeeMethods] = useState<Array<EquipmentDto>>([]);
  const [coffeeProducts, setCoffeeProducts] = useState<Array<CoffeeDto>>([]);

  const [loading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fillRecipes = async () =>
      get("/brew-method").then((data) => setRecipies(data as BrewMethodDto[]));

    const fillMethods = async () =>
      get("/equipment").then((data) =>
        setCoffeeMethods(data as EquipmentDto[])
      );

    const fillProducts = async () =>
      get("/coffee").then((data) => setCoffeeProducts(data as CoffeeDto[]));

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
        <View className="m-4">
          <SearchBar />
        </View>
        <View className="mb-2">
          <View className="mx-4 my-2">
            <Text className="text-xl font-bold">Recipes</Text>
            <Text className="text-base text-gray-500">{`${recipes.length} Brew guides`}</Text>
          </View>
          <FlatList
            horizontal
            data={recipes}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageSrc={item.imageUrl}
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
        <Separator />
        <View className="mb-2">
          <View className="mx-4 my-2">
            <Text className="text-xl font-bold">Methods</Text>
            <Text className="text-base text-gray-500">{`${coffeeMethods.length} Coffee methods`}</Text>
          </View>
          <FlatList
            horizontal
            data={coffeeMethods}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageSrc={item.imageUrl}
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
        <Separator />
        <View className="mb-2">
          <View className="mx-4 my-2">
            <Text className="text-xl font-bold">Products</Text>
            <Text className="text-base text-gray-500">{`${recipes.length} Brew guides`}</Text>
          </View>
          <FlatList
            horizontal
            data={coffeeProducts}
            renderItem={({ item }) => (
              <Card
                label={item.name}
                imageSrc={item.imageUrl}
                onPress={() =>
                  router.navigate({
                    pathname: `${Routes.Product.path}`,
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
