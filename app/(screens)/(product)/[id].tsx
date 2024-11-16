import { Collapsible } from "@/components/Collapsible";
import Loading from "@/components/Loading";
import Screen from "@/components/Screen";
import Separator from "@/components/Separator";
import { DEFAULT_IMAGE_URL } from "@/constants/Images";
import { get } from "@/lib/api";
import { Coffee, Size } from "@/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();
  const [loading, setIsLoading] = useState<boolean>(true);
  const [coffee, setCoffee] = useState<Coffee>();

  useEffect(() => {
    const getCoffee = async () =>
      get(`/coffee/${id}`).then((data) => {
        setCoffee(data as Coffee);
        setIsLoading(false);
      });

    getCoffee();
  }, []);
  return (
    <Screen>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View className="flex-1 items-center">
            <View className=" relative my-4 w-36 h-72 items-center justify-center">
              <Image
                onLoad={() => <Loading />}
                className="flex-1 w-36 object-cover overflow-visible"
                source={{
                  uri: coffee?.imageUrl,
                }}
              />
            </View>
          </View>
          <Separator marginX={Size.BASE} marginY={Size.BASE} />
          <View className="m-4 mb-0">
            <Collapsible title="General">
              <View className="px-2 py-4 bg-gray-50 rounded-lg">
                <View className="px-2 flex flex-row justify-between">
                  <Text>Cofee Name</Text>
                  <Text className=" font-semibold">{coffee?.name}</Text>
                </View>
                <Separator />
                <View className="px-2 flex flex-row justify-between">
                  <Text>Roasted</Text>
                  <Text className=" font-semibold">{coffee?.roasted}</Text>
                </View>
                <Separator />
                <View className="px-2 flex">
                  <Text className="pb-2">Decription</Text>
                  <Text className=" font-semibold break-words">
                    {coffee?.description}
                  </Text>
                </View>
              </View>
            </Collapsible>
          </View>
          <View className="mx-4 my-2">
            <Collapsible title="Traceability">
              <View className="px-2 py-4 bg-gray-50 rounded-lg">
                <View className="px-2 flex flex-row justify-between">
                  <Text>Altitude</Text>
                  <Text className=" font-semibold">
                    {coffee?.traceability.altitude}
                  </Text>
                </View>
                <Separator />
                <View className="px-2 flex flex-row justify-between">
                  <Text>Region</Text>
                  <Text className=" font-semibold">
                    {coffee?.traceability.region}
                  </Text>
                </View>
                <Separator />
                <View className="px-2 flex flex-row justify-between">
                  <Text>Variety</Text>
                  <Text className=" font-semibold">
                    {coffee?.traceability.variety}
                  </Text>
                </View>
                <Separator />
                <View className="px-4 flex flex-row justify-between">
                  <Text>Process</Text>
                  <Text className=" font-semibold">
                    {coffee?.traceability.process || "Not speficied"}
                  </Text>
                </View>
              </View>
            </Collapsible>
          </View>
          <View></View>
        </ScrollView>
      )}
    </Screen>
  );
}
