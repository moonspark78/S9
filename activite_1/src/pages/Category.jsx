import { useParams } from "react-router";

function Category() {
  const { category } = useParams();

  return (
    <div>
      <h1>Catégorie : {category}</h1>
    </div>
  );
}

export default Category;
