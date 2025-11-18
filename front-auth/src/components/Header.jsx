import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import "../assets/styles/Header.css";
function Header() {
  const location = useLocation();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const valid = auth && new Date(auth.expiresAt) > new Date();
    setIsConnected(valid);
  }, [location]);

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Accueil
          </Nav.Link>
          <Nav.Link as={NavLink} to="/offres/publiques">
            Offres Publiques
          </Nav.Link>
          {isConnected && (
            <Nav.Link as={NavLink} to="/offres/professionnelles">
              Offres Pro
            </Nav.Link>
          )}
          {!isConnected && (
            <>
              <Nav.Link as={NavLink} to="/inscription">
                Inscription
              </Nav.Link>
              <Nav.Link as={NavLink} to="/connexion">
                Connexion
              </Nav.Link>
            </>
          )}
          {isConnected && (
            <Nav.Link as={NavLink} to="/deconnexion">
              Déconnexion
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
