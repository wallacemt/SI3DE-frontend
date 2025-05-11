import Cookies from "js-cookie";
export const baseURL = `${import.meta.env.VITE_API_URL}`;
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
