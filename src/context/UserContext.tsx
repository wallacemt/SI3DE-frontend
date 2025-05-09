import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export const UserContext = createContext({
  user: null as { token: string; role: string } | null,
  login: (_token: string, _role: string) => {},
  logout: () => {},
  loading: true,
  update: false,
  handleUpdate: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<{ token: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (token) {
      setUser({ token: token, role: "student" });
    } else {
      setLoading(false);
    }
  }, [update]);

  //   const fetchUserData = async () => {
  //     try {
  //       const userData = await getUserInfo();

  //       setUser(userData!);
  //     } catch (error: any) {
  //       if (error.status == 401) {
  //         logout();
  //       }
  //       throw error;
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const login = async (token: string, role: string) => {
    Cookies.set("jwtToken", token, { expires: 1, sameSite: "strict" });
    setUser({ token, role });
    return role === "student" ? navigate("/dashboard") : navigate("/uniruy/dashboard");
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    setUser(null);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleUpdate = () => setUpdate(!update);
  return (
    <UserContext.Provider value={{ user, login, logout, loading, update, handleUpdate }}>
      {children}
    </UserContext.Provider>
  );
};
