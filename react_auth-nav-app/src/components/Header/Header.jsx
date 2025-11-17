import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useMatch } from "react-router";
import "./Header.css";

function Header() {
  const match = useMatch("/categorie/:category");
  const categoryName = match ? match.params.category : null;


  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          {categoryName && (
            <span className="me-3 fw-bold">
              Catégorie : {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </span>
          )}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className="cursor-pointer"
                end
              >
                Accueil
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/categorie/vetements"
                className="cursor-pointer"
              >
                Vêtements
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/categorie/chaussures"
                className="cursor-pointer"
              >
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
