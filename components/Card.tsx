import React from "react";
import { View, Text, Image } from "react-native";

const Card = ({ label = "Dial in coffee" }) => {
  return (
    <View className="bg-black items-center rounded-2xl p-2 w-32 m-2">
      <View className="bg-white rounded-full">
        <Image
          className=" object-cover h-16 w-16 m-4"
          source={require("@/assets/images/coffee-cup.png")}
        />
      </View>
      <Text className=" text-white text-sm pt-2 text-center">{label}</Text>
    </View>
  );
};

export default Card;
