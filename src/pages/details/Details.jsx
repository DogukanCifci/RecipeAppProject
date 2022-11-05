import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
} from "./DetailsStyles";

const Details = ({ element }) => {
  const location = useLocation();
  const myNewElement = location.state.element;
  const { label, totalNutrients, image, ingredients } = myNewElement;
  const { CA, CHOCDF, CHOLE, ENERC_KCAL, FAT, PROCNT } = totalNutrients;

  console.log(myNewElement);
  console.log(totalNutrients);
  console.log(ingredients);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{label}</h1>
      </HeaderContainer>

      <ImgContainer>
        <DetailPart>
          <h5>Nutrients</h5>
          <ul>
            <li>
              {CA.label} : {Math.floor(CA.quantity)}
              {CA.unit}
            </li>
            <li>
              {CHOCDF.label} : {Math.floor(CHOCDF.quantity)}
              {CHOCDF.unit}
            </li>
            <li>
              {" "}
              {CHOLE.label} : {Math.floor(CHOLE.quantity)}
              {CHOLE.unit}
            </li>
            <li>
              {ENERC_KCAL.label} : {Math.floor(ENERC_KCAL.quantity)}
              {ENERC_KCAL.unit}
            </li>
            <li>
              {FAT.label} : {Math.floor(FAT.quantity)}
              {FAT.unit}
            </li>
            <li>
              {" "}
              {PROCNT.label} : {Math.floor(PROCNT.quantity)}
              {PROCNT.unit}
            </li>
          </ul>
        </DetailPart>
        <img src={image} alt="" />
        <IngredContainer>
          <ol>
            {ingredients.map((e, index) => (
              <li key={index}>{e.text}</li>
            ))}
          </ol>
        </IngredContainer>
      </ImgContainer>
    </DetailContainer>
  );
};

export default Details;
