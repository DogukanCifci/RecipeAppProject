import styled from "styled-components";

export const Header = styled.h1`
  color: white;
  text-align: center;
`;
export const ContainerInput = styled.div`
  padding: 20px 0;
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 220px;
  height: 40px;
`;

export const Select = styled.select`
  background-color: white;
  width: 120px;
`;

export const AltKapsayici = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid white;
  border-radius: 10px;
  width: 500px;
  background-color: red;
  padding: 5px 10px;
`;

export const RecipeCardsKapsayici = styled.div`
  background-color: white;
  padding-top: 30px;
  margin-top: 32px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 80vh;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
`;

export const RecipeCards = styled.div`
  background-color: aqua;
  width: 350px;
`;

export const RecipeImage = styled.img`
  width: 150px;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 23px;
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
