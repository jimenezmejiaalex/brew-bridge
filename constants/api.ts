export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const API = {
  headers: {
    "Content-Type": "application/json",
  },
};
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const GET_CONFIG = {
  method: HttpMethod.GET,
  headers: API.headers,
};
