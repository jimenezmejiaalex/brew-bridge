import { PropsWithChildren } from "react";
import { View } from "react-native";

export default function Screen({ children }: PropsWithChildren) {
  return <View>{children}</View>;
}
