import { API, API_URL, GET_CONFIG, HttpMethod } from "@/constants/api";

export const get = async (path: string) => {
  try {
    const token = await getToken();
    return await makeRequest(path, token);
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

const encodeToBase64 = (str: string) => {
  return btoa(str);
};

const getToken = async () => {
  try {
    const credentials = `${process.env.EXPO_PUBLIC_USER}:${process.env.EXPO_PUBLIC_PASS}`;

    const response = await fetch(`${API_URL}/auth/login`, {
      headers: {
        ...API.headers,
        Authorization: `Basic ${encodeToBase64(credentials)}`,
      },
      method: HttpMethod.GET,
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

const makeRequest = async (path: string, token?: string) => {
  const headers = {
    ...API.headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  try {
    const response = await fetch(`${API_URL}${path}`, {
      headers,
      method: HttpMethod.GET,
    });
    return await response.json();
  } catch (error) {
    console.error("Error in request:", error);
    throw error;
  }
};
