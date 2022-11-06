import React from "react";
import RecipeCard from "../../pages/home/RecipeCard";
import Man from "../../assets/home.svg";
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
            style={{
              backgroundColor: "#153462",
              color: "#F6F6C9",
              width: "80px",
            }}
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
          {foodList.length > 0 ? (
            foodList.map((element, index) => (
              <RecipeCard key={index} element={element.recipe} />
            ))
          ) : (
            <img width={500} src={Man} alt="" />
          )}
        </RecipeCardsKapsayici>
      </ContainerInput>
    </div>
  );
};

export default MyHeader;
