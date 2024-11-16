import WaveAnimation from "@/components/Wave";
import { Routes } from "@/constants/Routes";
import { StartingPosition } from "@/types";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

export default function RecipeModal() {
  const [restart, setRestart] = useState(false);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [seconds]);
  return (
    <>
      <View className=" flex items-center justify-center">
        <View className="flex">
          <Text className=" font-medium text-2xl">{seconds}</Text>
        </View>
        <View>
          <WaveAnimation
            duration={10}
            startFrom={StartingPosition.BOTTOM}
            restart={restart}
          />
        </View>
      </View>
    </>
  );
}
