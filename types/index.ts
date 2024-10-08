import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

export type RootStackParamList = {
  Home: undefined;
  Explore: undefined;
  Recipe: {
    id: string;
    title: string;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type RecipeDto = {
  id: string;
  name: string;
  brewMethod: {
    methodImage: MethodImage;
  };
};

export type MethodDto = {
  id: string;
  name: string;
  methodImage: MethodImage;
};

export type CoffeeDto = {
  id: string;
  name: string;
};

export enum MethodImage {
  AEROPRESS = "AEROPRESS",
  CHEMEX = "CHEMEX",
  MOKA = "MOKA",
  ESPRESSO = "ESPRESSO",
  FRENCH_PRESS = "FRENCH_PRESS",
  POUR_OVER = "POUR_OVER",
  MOKA_POT = "MOKA_POT",
  COLD_BREW = "COLD_BREW",
  DRIP_COFFEE = "DRIP_COFFEE",
  SIPHON = "SIPHON",
  TURKISH_COFFEE = "TURKISH_COFFEE",
  CLEVER_DRIPPER = "CLEVER_DRIPPER",
  V60 = "V60",
  KALITA_WAVE = "KALITA_WAVE",
  PERCOLATOR = "PERCOLATOR",
  NITRO_COLD_BREW = "NITRO_COLD_BREW",
  FLAT_WHITE = "FLAT_WHITE",
  MACCHIATO = "MACCHIATO",
  RISTRETTO = "RISTRETTO",
  AFFOGATO = "AFFOGATO",
  CAFE_AU_LAIT = "CAFE_AU_LAIT",
  VANDOLA = "VANDOLA",
}

export interface Recipe {
  brewMethod: BrewMethod;
  brewMethodId: number;
  coffeeProduct: CoffeeProduct;
  coffeeProductId: number;
  coffeeSize: number;
  cupsCount: number;
  filterType: any;
  grindSize: string;
  hasFilter: boolean;
  id: number;
  name: string;
  notes: string;
  ratio: number;
  roastLevel: string;
  shareWithCommunity: boolean;
  steps: Step[];
  temperature: number;
  temperatureUnit: string;
  waterSize: number;
}

export interface BrewMethod {
  brewingTime: number;
  coffeeToWaterRatio: number;
  id: number;
  methodImage: string;
  name: string;
  recommendedGrindSize: string;
  waterTemperature: number;
}

export interface CoffeeProduct {
  beanId: number;
  farmId: number;
  id: number;
  name: string;
  price: number;
  roastDate: string;
  roasterId: number;
  shelfLife: number;
  weight: number;
}

export interface Step {
  amount: number;
  duration: number;
  id: number;
  notes: string;
  recipeId: number;
  stepTypeId: number;
}
