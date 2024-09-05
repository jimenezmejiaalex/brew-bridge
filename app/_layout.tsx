import Logo from "@/components/svgs/Logo";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerStyle: {
          backgroundColor: Colors.header.background,
        },
        headerTintColor: "black",
        headerTitle: () => <Logo />,
      }}
    ></Stack>
  );
}
