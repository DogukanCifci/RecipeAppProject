import styled from "styled-components";

export const RecipeCards = styled.div`
  background-color: aqua;
  width: 350px;
`;

export const RecipeHeader = styled.h5`
  color: black;
  font-weight: 800;
`;

export const Button = styled.button`
  color: black;
  background-color: white;
  display: block;
  margin: 10px auto;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 5px 5px black;
  &:hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;

export const RecipeImage = styled.img`
  width: 180px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 23px;
`;
