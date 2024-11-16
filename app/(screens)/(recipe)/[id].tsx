import Loading from "@/components/Loading";
import { DEFAULT_IMAGE_URL, IMAGES } from "@/constants/Images";
import { Routes } from "@/constants/Routes";
import { get } from "@/lib/api";
import { BrewTime, MethodImage, Recipe } from "@/types";
import { getImage } from "@/utils/ImagesUtil";
import { convertSeconds } from "@/utils/TimeUtils";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams();
  const [loading, setIsLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<Recipe>();
  const [time, setTime] = useState<BrewTime | null>(null);

  const router = useRouter();

  useEffect(() => {
    const getRecipe = async () =>
      get(`/recipe/${id}`)
        .then((json) => json.data)
        .then((data) => {
          setRecipe(data);
          setIsLoading(false);
        });

    getRecipe();
  }, []);

  useEffect(() => {
    if (recipe) {
      const seconds = recipe.steps.reduce(
        (prev, step) => step.duration + prev,
        0
      );
      setTime(convertSeconds(seconds));
    }
  }, [recipe]);

  if (loading) return <Loading />;

  return (
    <View className="flex-1">
      <ScrollView className="p-4">
        <View className="flex-1 w-full items-center justify-center mb-2">
          <View className=" bg-white relative m-2 w-48 h-48 items-center justify-center rounded-full shadow-md border border-black">
            <Image
              className="flex-1 max-h-12 w-20 object-cover overflow-visible"
              source={getImage(recipe?.brewMethod?.methodImage as MethodImage)}
            />
          </View>
        </View>
        {/* Coffee Selection */}
        <View className="bg-dark-charcoal rounded-2xl p-4 mb-6">
          <Text className="text-lg text-[#FFFFFF] font-medium">
            {recipe?.name}
          </Text>
          <Text className="text-sm text-[#EFB810] mb-2">{recipe?.notes}</Text>
          <TouchableOpacity className="flex-row items-center justify-between bg-dark-steel rounded-xl p-4 mt-2">
            {recipe?.coffeeProduct !== null ? (
              <View className="flex-1 flex-row items-center">
                <View className=" bg-white relative w-8 h-8 items-center justify-center rounded-full shadow-md border border-black">
                  <Image
                    className="flex-1 w-2 h-4 max-h-6 object-cover overflow-visible"
                    source={getImage(
                      recipe?.brewMethod.methodImage as MethodImage
                    )}
                  />
                </View>
                <Text className="text-white pl-4">
                  {recipe?.brewMethod.name}
                </Text>
              </View>
            ) : (
              <Text className="text-white">Select method</Text>
            )}
            <FontAwesome name="angle-right" size={24} color="#EFB810" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between bg-dark-steel rounded-xl p-4 mt-2">
            {recipe?.coffeeProduct !== null ? (
              <View className="flex-1 flex-row items-center">
                <View className=" bg-white relative w-8 h-8 items-center justify-center rounded-full shadow-md border border-black">
                  <Image
                    className="flex-1 w-2 h-4 max-h-6 object-cover overflow-visible"
                    source={DEFAULT_IMAGE_URL}
                  />
                </View>
                <Text className="text-white pl-4">
                  {recipe?.coffeeProduct.name}
                </Text>
              </View>
            ) : (
              <Text className="text-white">Select coffee</Text>
            )}
            <FontAwesome name="angle-right" size={24} color="#EFB810" />
          </TouchableOpacity>
        </View>

        {/* Brew Settings */}
        <View className=" overflow-hidden mb-6 bg-dark-charcoal rounded-2xl">
          <View className="p-4">
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-[#FFFFFF]">COFFEE</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">
                  {recipe?.coffeeSize}
                  {"g"}
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-[#FFFFFF]">{`WATER (${recipe?.temperature}°)`}</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">
                  {recipe?.waterSize}
                  {"g"}
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-4">
              <View className="items-center">
                <Text className="text-[#FFFFFF]">GRINDER</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold capitalize">
                  {recipe?.grindSize}
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-[#FFFFFF]">BREW TIME</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">{`${time?.minutes}:${time?.seconds != null && time.seconds < 10 ? `${time?.seconds}0` : time?.seconds}`}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Brew Button */}
        <TouchableOpacity
          className="bg-[#efb810] p-4 rounded-full items-center shadow-lg"
          activeOpacity={0.8}
          onPress={() => router.navigate(Routes.RecipeModal.path)}
        >
          <FontAwesome name="play" size={24} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
