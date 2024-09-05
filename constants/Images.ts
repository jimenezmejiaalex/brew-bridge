import { MethodImage } from "@/types";

export const IMAGES = {
  [MethodImage.CHEMEX]: require("@/assets/images/chemexv2.png"),
  [MethodImage.MOKA]: require("@/assets/images/mokav2.png"),
  [MethodImage.FRENCH_PRESS]: require("@/assets/images/prensav2.png"),
  [MethodImage.SIPHON]: require("@/assets/images/sifonv2.png"),
  [MethodImage.V60]: require("@/assets/images/v60v2.png"),
  [MethodImage.AEROPRESS]: require("@/assets/images/aeropressv2.png"),
  [MethodImage.ESPRESSO]: null,
  [MethodImage.POUR_OVER]: null,
  [MethodImage.MOKA_POT]: null,
  [MethodImage.COLD_BREW]: null,
  [MethodImage.DRIP_COFFEE]: "",
  [MethodImage.TURKISH_COFFEE]: null,
  [MethodImage.CLEVER_DRIPPER]: null,
  [MethodImage.KALITA_WAVE]: null,
  [MethodImage.PERCOLATOR]: null,
  [MethodImage.NITRO_COLD_BREW]: null,
  [MethodImage.FLAT_WHITE]: null,
  [MethodImage.MACCHIATO]: null,
  [MethodImage.RISTRETTO]: null,
  [MethodImage.AFFOGATO]: null,
  [MethodImage.CAFE_AU_LAIT]: null,
  [MethodImage.VANDOLA]: null,
};

export const DEFAULT_IMAGE_URL = require("@/assets/images/coffee-cup.png");
