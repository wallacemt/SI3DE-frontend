import Cookies from "js-cookie";

export const baseURL = "http://127.0.0.1:5000";
export interface SimpleResponse {
  message: string;
}

export const handleToken = (apiInstance: any) => {
  const token = Cookies.get("jwtToken");
  if (token) {
    return (apiInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  }
  return;
};
