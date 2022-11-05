// const APP_ID = "4e9f05eb";
import axios from "axios";
import { useState } from "react";

import {
  AltKapsayici,
  ContainerInput,
  Header,
  Input,
  RecipeCardsKapsayici,
  Select,
} from "./HomeStyles";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [foodList, setFoodList] = useState([]);
  const [food, setFood] = useState("");
  const [ögün, setOgün] = useState("breakfast");
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const APP_ID = "4e9f05eb";

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  // const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const getData = async () => {
    const { data } = await axios.get(url);
    setFoodList(data.hits);
  };
  console.log(foodList);
  console.log(food);
  console.log(url);
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

export default Home;
