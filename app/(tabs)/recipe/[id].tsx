import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";

export default function RecipeScreen() {
  const { id, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);

  return (
    <View className="flex-1">
      <ScrollView className="p-4">
        {/* Coffee Selection */}
        <View className="bg-dark-charcoal rounded-2xl p-4 mb-6">
          <Text className="text-lg text-[#FFFFFF] font-medium">{title}</Text>
          <Text className="text-sm text-[#EFB810] mb-2">Recipe</Text>
          <TouchableOpacity className="flex-row items-center justify-between bg-dark-steel rounded-xl p-4 mt-2">
            <Text className="text-[#FFFFFF]">Select recipe</Text>
            <FontAwesome name="angle-right" size={24} color="#EFB810" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between bg-dark-steel rounded-xl p-4 mt-2">
            <Text className="text-[#FFFFFF]">Select coffee</Text>
            <FontAwesome name="angle-right" size={24} color="#EFB810" />
          </TouchableOpacity>
        </View>

        {/* Brew Settings */}
        <View className=" overflow-hidden mb-6 bg-dark-charcoal rounded-2xl">
          <View className="p-4">
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-[#FFFFFF]">COFFEE</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">25g</Text>
              </View>
              <View className="items-center">
                <Text className="text-[#FFFFFF]">WATER (94°)</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">340g</Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-4">
              <View className="items-center">
                <Text className="text-[#FFFFFF]">GRINDER</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">
                  Medium
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-[#FFFFFF]">BREW TIME</Text>
                <Text className="text-2xl text-[#FFFFFF] font-bold">2:20</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Brew Button */}
        <TouchableOpacity
          className="bg-[#efb810] p-4 rounded-full items-center shadow-lg"
          activeOpacity={0.8}
          onPress={() => alert("Brew started!")}
        >
          <FontAwesome name="play" size={24} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
