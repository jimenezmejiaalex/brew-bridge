import { Size } from "@/types";
import { mapSizeToMargin } from "@/utils";
import { View } from "react-native";

interface SeparatorPros {
  marginY?: Size;
  marginX?: Size;
}

export default function Separator({
  marginX = Size.SM,
  marginY = Size.SM,
}: SeparatorPros) {
  const classString = `my-${mapSizeToMargin(marginY)} mx-${mapSizeToMargin(marginX)} h-0.5 bg-gray-200`;

  return <View className={classString} />;
}
