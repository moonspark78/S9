import { useParams,useNavigate } from "react-router";
import { Container } from "react-bootstrap";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };


  return (
    <Container className="ms-10">
      <h1>Catégorie : {category}</h1>
      <button onClick={goHome} className="btn btn-primary mt-3">
        Retour à l'accueil
      </button>
    </Container>
  );
}

export default Category;
