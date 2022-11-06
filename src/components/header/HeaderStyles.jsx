import styled from "styled-components";
export const ContainerInput = styled.div`
  padding: 20px 0 0 0;
  background-color: #189cb0;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Header = styled.h1`
  color: white;
  text-align: center;
`;

export const AltKapsayici = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid white;
  border-radius: 10px;
  width: 500px;
  background-color: white;
  padding: 5px 10px;
`;

export const Select = styled.select`
  background-color: #9fc131;
  width: 120px;
`;

export const Input = styled.input`
  width: 220px;
  height: 40px;
`;

export const RecipeCardsKapsayici = styled.div`
  background-color: white;
  border-radius: 30px 30px 0 0;
  padding-top: 30px;
  margin-top: 32px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 60vh;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  padding-bottom: 20px;
`;
