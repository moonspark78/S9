import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice.js";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        if (token) {
          const response = await fetch(
            "https://offers-api.digistos.com/api/auth/logout",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            const data = await response.json();
            throw new Error(
              `Erreur API logout: ${data.message} (status: ${response.status})`
            );
          }
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        
        dispatch(logout());
        navigate("/connexion");
      }
    };

    handleLogout();
  }, [token, dispatch, navigate]);

  return null;
};

export default Logout;
