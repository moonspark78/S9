import { useNavigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [canAccess, setCanAccess] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const isValid = auth && new Date(auth.expiresAt) > new Date();

    if (!isValid) {
      localStorage.removeItem("auth");
      navigate("/connexion");
    } else {
      setCanAccess(true);
    }

    setChecking(false);
  }, [navigate]);

  if (checking) {
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  }

  return canAccess ? <Outlet /> : null;
};

export default PrivateRoute;
