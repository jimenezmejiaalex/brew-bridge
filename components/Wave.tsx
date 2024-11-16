import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CIRCLE_RADIUS = width * 0.4;

interface WaveAnimationProps {
  duration: number; // duration in seconds
  startFrom: "top" | "bottom"; // direction of the fill
  restart: boolean; // restart the animation
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({
  duration,
  startFrom,
  restart,
}) => {
  const waveProgress = useSharedValue(0);

  useEffect(() => {
    if (restart) {
      waveProgress.value = 0; // Reset the animation progress
    }

    waveProgress.value = withTiming(1, { duration: duration * 1000 });
  }, [duration, restart]);

  const waveStyle = useAnimatedStyle(() => {
    const height = interpolate(
      waveProgress.value,
      [0, 1],
      [0, CIRCLE_RADIUS * 2] // Height interpolation
    );

    const translateY =
      startFrom === "top"
        ? interpolate(waveProgress.value, [0, 1], [-CIRCLE_RADIUS * 2, 0]) // Start filling from the top
        : 0; // Start from bottom, no translation needed

    return {
      height,
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.circleContainer}>
      <Animated.View className="shadow-md" style={[styles.wave, waveStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    overflow: "hidden",
  },
  wave: {
    width: CIRCLE_RADIUS * 2,
    backgroundColor: "#90bede",
    position: "absolute",
    bottom: 0, // Default position starts at bottom
  },
});

export default WaveAnimation;
