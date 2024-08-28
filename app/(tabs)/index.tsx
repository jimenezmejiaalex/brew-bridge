import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function HomeScreen() {
  const [recipes, setRecipies] = useState<Array<{ id: string; name: string }>>(
    []
  );
  const [coffeeMethods, setCoffeeMethods] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [coffeeProducts, setCoffeeProducts] = useState<
    Array<{ id: string; name: string }>
  >([]);

  useEffect(() => {
    fetch(`https://9148-201-237-248-118.ngrok-free.app/api/recipe/all`)
      .then((response) => response.json())
      .then((data) => {
        const dataJson = data.data;
        setRecipies(dataJson);
      });
  }, []);

  useEffect(() => {
    fetch(`https://9148-201-237-248-118.ngrok-free.app/api/coffee/method/all`)
      .then((response) => response.json())
      .then((data) => {
        const dataJson = data.data;
        setCoffeeMethods(dataJson);
      });
  }, []);

  useEffect(() => {
    fetch(`https://9148-201-237-248-118.ngrok-free.app/api/coffee/product/all`)
      .then((response) => response.json())
      .then((data) => {
        const dataJson = data.data;
        setCoffeeProducts(dataJson);
      });
  }, []);

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
            renderItem={({ item }) => <Card label={item.name} />}
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
            renderItem={({ item }) => <Card label={item.name} />}
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
            renderItem={({ item }) => <Card label={item.name} />}
            keyExtractor={({ id }) => id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
