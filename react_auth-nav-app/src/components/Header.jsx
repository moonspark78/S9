import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <LinkContainer to="/">
              <Nav.Link as="span">Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categorie/vetements">
              <Nav.Link as="span">Vêtements</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/categorie/chaussures">
              <Nav.Link as="span">Chaussures</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
