import { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import OfferList from "../components/OfferList.jsx";

const OfferProList = () => {
  const token = useSelector((state) => state.auth.token);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://offers-api.digistos.com/api/offers/pro",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setOffers(Array.isArray(data.data) ? data.data : []);

        if (!response.ok)
          throw new Error(data.message || `Erreur ${response.status}`);
      } catch (err) {
        console.error(err);
        setError(err.message || "Une erreur est survenue.");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchOffers();
    else setError("Utilisateur non connecté.");
  }, [token]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error)
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );

  return <OfferList offers={offers} />;
};

export default OfferProList;
