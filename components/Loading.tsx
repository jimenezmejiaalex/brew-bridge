import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  return (
    <View className=" absolute top-80 left-40">
      <ActivityIndicator size="large" />
    </View>
  );
}
