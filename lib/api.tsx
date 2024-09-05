import { API_URL, GET_CONFIG } from "@/constants/api";

export const get = async (path: string) => {
  const response = await fetch(`${API_URL}${path}`, {
    ...GET_CONFIG,
  });
  const dataJson = await response.json();
  return dataJson;
};
