import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserInfoContext = createContext();

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.warn("No access token found");
        setError("No access token found");
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      console.log("Fetching user info...");
      const response = await axios.get(
        `http://192.168.91.71:8000/account/me/`,
        config
      );

      if (response.status === 200) {
        console.log("User info fetched successfully:", response.data);
        setUserInfo(response.data);
      } else {
        console.error("Failed to fetch user info. Status:", response.status);
        setError("Failed to fetch user info");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      setError("Error fetching user info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};
