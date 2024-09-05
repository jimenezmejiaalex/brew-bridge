import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { DEFAULT_IMAGE_URL } from "@/constants/Images";
import { useAssets } from "expo-asset";
type CardProps = {
  label: string;
  onPress: () => void;
  imageUrl: string;
};

const Card = ({ label = "Dial in coffee", imageUrl, onPress }: CardProps) => {
  const [asset, error] = useAssets([require(imageUrl)]);
  if (asset) console.log(asset[0].localUri);
  return (
    <Pressable onPress={() => onPress()}>
      <View className="bg-black m-2 items-center h-48 rounded-md">
        <View className="bg-white m-4 w-28 h-28 items-center justify-center rounded-full">
          <Image
            source={(asset && asset[0].localUri) || DEFAULT_IMAGE_URL}
            contentFit="cover"
            placeholder={DEFAULT_IMAGE_URL}
          />
        </View>
        <Text className="text-white text-sm text-center w-28">{label}</Text>
      </View>
    </Pressable>
  );
};

export default Card;
