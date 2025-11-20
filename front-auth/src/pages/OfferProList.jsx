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

        const { data: offers, message } = await response.json();
        
        if (!response.ok) {
          throw { status: response.status, message: message };
        }

        setOffers(offers);
      } catch (err) {
        if (err.status === 403) {
          setError("Accès non autorisé (403).");
        } else {
          setError("Erreur lors du chargement de l'offre.");
        }
        console.error(err.message || err);
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
