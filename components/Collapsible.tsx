import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type CollapsibleProps = {
  children: React.ReactNode;
  title: string;
};

export function Collapsible({ children, title }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [animation] = useState(new Animated.Value(1));
  const [rotateAnim] = useState(new Animated.Value(1));

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(rotateAnim, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const rotateIcon = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleCollapse}>
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-semibold text-black ">{title}</Text>
          <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
            <FontAwesome name={"chevron-right"} size={16} color="#gray" />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
        <View className="pt-2">{children}</View>
      </Animated.View>
    </View>
  );
}
