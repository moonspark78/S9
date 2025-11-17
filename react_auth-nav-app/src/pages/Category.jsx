import { useParams } from "react-router";
import { Container } from "react-bootstrap";

function Category() {
  const { category } = useParams();

  return (
    <Container className="ms-10">
      <h1>Catégorie : {category}</h1>
    </Container>
  );
}

export default Category;
