import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Container, Card, Spinner, Alert } from "react-bootstrap";

const Offer = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(
          `https://offers-api.digistos.com/api/offers/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok)
          throw new Error(data.message || `Erreur ${response.status}`);
        setOffer(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchOffer();
    else setError("Utilisateur non connecté.");
  }, [id, token]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error)
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {error}
      </Alert>
    );

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{offer.name}</Card.Title>
          <Card.Text>
            <strong>Prix :</strong> {offer.price}€
          </Card.Text>
          <Card.Text>
            <strong>Description :</strong> {offer.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Offer;
