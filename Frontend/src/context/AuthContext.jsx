import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get stored user, token, and login time
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;
  const storedToken = localStorage.getItem("token") || null;
  const storedTime = localStorage.getItem("loginTime") || null;

  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    // Check if login time exists and if 24 hours have passed
    if (storedTime) {
      const now = new Date().getTime();
      const loginTime = parseInt(storedTime, 10);
      const hoursPassed = (now - loginTime) / (1000 * 60 * 60);

      if (hoursPassed >= 24) {
        logout(); // Auto logout after 24 hours
      }
    }
  }, []);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("loginTime", new Date().getTime()); // Save current timestamp
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("loginTime");
    }
  }, [user, token]);

  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
