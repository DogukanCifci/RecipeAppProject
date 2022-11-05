import React from "react";
import RecipeCard from "../../pages/home/RecipeCard";
import {
  AltKapsayici,
  ContainerInput,
  Header,
  Input,
  RecipeCardsKapsayici,
  Select,
} from "./HeaderStyles";
//import { FormContainer, HeaderContainer, MainHeader,FoodInput, Button, Select } from './HeaderStyles'

const MyHeader = ({ setOgün, ögün, food, setFood, getData, foodList }) => {
  return (
    <div>
      <ContainerInput>
        <div>
          <Header>FOOD APP</Header>
        </div>
        <AltKapsayici>
          <Input
            placeholder="Search"
            onChange={(e) => setFood(e.target.value)}
          />
          <button
            width={300}
            style={{ backgroundColor: "lightgreen", width: "80px" }}
            onClick={getData}
          >
            Search
          </button>
          <Select onInput={(e) => setOgün(e.target.value)}>
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
          </Select>
        </AltKapsayici>
        <RecipeCardsKapsayici>
          {foodList.map((element, index) => (
            <RecipeCard key={index} element={element.recipe} />
          ))}
        </RecipeCardsKapsayici>
      </ContainerInput>
    </div>
  );
};

export default MyHeader;
