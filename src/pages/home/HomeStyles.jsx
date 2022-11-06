import styled from "styled-components";

export const RecipeCards = styled.div`
  background-color: rgba(33, 16, 107, 0.864);
  width: 350px;
  height: 370px;
  box-shadow: 10px 10px 10px black;
  border-radius: 15px;
  position: relative;
`;

export const RecipeHeader = styled.h5`
  color: white;
  font-size: 1.2rem;
  font-weight: 800;
`;

export const Button = styled.button`
  color: black;
  background-color: white;
  display: block;
  position: absolute;
  bottom: 20px;
  right: 125px;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 5px 5px black;
  width: 100px;
  height: 40px;
  &:hover {
    cursor: pointer;
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
