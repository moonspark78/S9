import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="cursor-pointer">
                Accueil
              </Nav.Link>

              <Nav.Link as={Link} to="/categorie/vetements" className="cursor-pointer">
                Vêtements
              </Nav.Link>

              <Nav.Link as={Link} to="/categorie/chaussures" className="cursor-pointer">
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
