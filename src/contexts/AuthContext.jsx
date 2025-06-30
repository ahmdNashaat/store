import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    api.get("/profile")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  };

  const fetchCart = () => {
    api.get("/cart")
      .then((res) => {
        console.log("✅ cart من API:", res.data.items);
        setCart(res.data.items || []);
      })
      .catch((err) => {
        console.error("❌ cart error", err);
        setCart([]);
      });
  };

  const fetchFavorites = () => {
    api.get("/favorites")
      .then((res) => {
        console.log("✅ favorites من API:", res.data);
        setFavorites(res.data || []);
      })
      .catch((err) => {
        console.error("❌ favorites error", err);
        setFavorites([]);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart();
      fetchFavorites();
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setCart([]);
    setFavorites([]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cart,
        favorites,
        logout,
        fetchCart,
        fetchFavorites,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
