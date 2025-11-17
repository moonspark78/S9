import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Header />
      <Container as="main" className="my-5">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
