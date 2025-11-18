import { useState } from "react";
import { Form, Button, Container, Card, Row, Col, Alert  } from "react-bootstrap";
import { useNavigate } from "react-router";

const LoginPage = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Handle login logic here
    try {
      const response = await fetch("https://offers-api.digistos.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
    // Don't forget to handle errors, both for yourself (dev) and for the client (via a Bootstrap Alert):
     if (!response.ok) {
    //   - Show an error if credentials are invalid
     if (response.status === 401) {
          throw new Error("Email ou mot de passe incorrect.");
    //   - Show a generic error for all other cases
     } else {
          // Sinon erreur générique
          throw new Error(`Erreur ${response.status} - ${data.message || "Une erreur est survenue."}`);
        }
      }
    // On success, redirect to the Pro Offers page
     navigate("/offres/professionnelles");
     } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Veuillez vérifier vos identifiants et réessayer.");
    } finally {
      setLoading(false);
    }

    console.log("Login submitted:", formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="p-4 shadow-lg">
            <h1 className="text-center mb-4">Se connecter</h1>
             {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="loginPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Se connecter
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
