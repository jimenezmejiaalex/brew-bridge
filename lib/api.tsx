import { API_URL } from "@/constants/api";

export const getRecipies = async () => {
  const response = await fetch(`${API_URL}/recipe`);
  console.log(response);
  const dataJson = await response.json();
  console.log(dataJson);
  return dataJson;
};
