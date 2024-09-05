import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
type CardProps = {
  label: string;
  onPress: () => void;
  imageSrc: ImageSourcePropType;
};

const Card = ({ label = "Dial in coffee", imageSrc, onPress }: CardProps) => {
  return (
    <Pressable onPress={() => onPress()}>
      <View className=" flex-1 items-center">
        <View className=" bg-white relative m-2 w-36 h-36 items-center justify-center rounded-full shadow-md border border-black">
          <Image
            className="flex-1 max-w-14 max-h-16 w-14 object-cover overflow-visible"
            source={imageSrc}
          />
        </View>
        <Text className=" text-gray-600 font-semibold text-base text-center">
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Card;
