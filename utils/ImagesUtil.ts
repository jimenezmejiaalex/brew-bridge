import { DEFAULT_IMAGE_URL, IMAGES } from "@/constants/Images";
import { MethodImage } from "@/types";

export const getImage = (methodImageId: MethodImage) => {
  const imageUrl = IMAGES[methodImageId];
  if (!imageUrl) {
    return DEFAULT_IMAGE_URL;
  }
  return imageUrl;
};
