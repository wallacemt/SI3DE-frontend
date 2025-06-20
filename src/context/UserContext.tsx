import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import type { UserData } from "@/types/userTypes";
import { useUser } from "@/hooks/useUser";
import { getAuth } from "@/api/authApi";

export const UserContext = createContext({
  user: null as UserData | null,
  login: (_token: string, _role: string) => {},
  logout: () => {},
  loading: true,
  update: false,
  handleUpdate: () => {},
  viewModal: false,
  handleViewModal: () => {},
  serverDown: false,
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserData | null>(null);

  const [viewModal, setViewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const { getUserInfo } = useUser();
  const navigate = useNavigate();
  const [serverDown, setServerDown] = useState(false);
  const init = async () => {
    const isUp = await checkServer();
    if (isUp) {
      const token = Cookies.get("jwtToken");
      if (token) {
        fetchUserData();
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, [update]);

  const fetchUserData = async () => {
    try {
      const userData = await getUserInfo();
      if (
        (!userData.isFullProfile && userData.role === "student") ||
        (userData.role === "student" && userData.profile === null)
      ) {
        handleViewModal();
      }
      setUser(userData);
    } catch (error: any) {
      if (error.response.status === 401) {
        logout();
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  const checkServer = async (): Promise<boolean> => {
    try {
      const res = await getAuth();
      if (res) {
        setServerDown(false);
        navigate("/");
      }
      return true;
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        if (!serverDown) {
          setServerDown(true);

          navigate("/503");
        }
      }
      return false;
    }
  };
  const login = async (token: string, role: string) => {
    Cookies.set("jwtToken", token, { expires: 1, sameSite: "strict" });
    fetchUserData();
    return role === "student" ? navigate("/dashboard") : navigate("/uniruy/dashboard");
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    setUser(null);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleViewModal = () => setViewModal(!viewModal);

  const handleUpdate = () => setUpdate(!update);
  return (
    <UserContext.Provider
      value={{ user, login, logout, loading, update, handleUpdate, viewModal, handleViewModal, serverDown }}
    >
      {children}
    </UserContext.Provider>
  );
};
