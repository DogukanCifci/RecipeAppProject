import React from "react";
import { Button, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ element, index }) => {
  let navigate = useNavigate();
  //console.log(element);
  const detayaGit = () => {
    navigate("/details", { state: { element } });
  };

  return (
    <RecipeCards key={index}>
      <RecipeHeader>{element.label}</RecipeHeader>
      <RecipeImage src={element.image} />
      <Button onClick={detayaGit}>View More</Button>
    </RecipeCards>
  );
};

export default RecipeCard;
