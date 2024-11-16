import { Size } from "@/types";

export function mapSizeToMargin(size: Size): string {
  const sizeMap: Record<Size, string> = {
    [Size.NONE]: "0",
    [Size.SM]: "2",
    [Size.BASE]: "4",
    [Size.MD]: "6",
    [Size.LG]: "8",
    [Size.XL]: "10",
    [Size.XXL]: "12",
  };

  return sizeMap[size];
}
