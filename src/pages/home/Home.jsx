// const APP_ID = "4e9f05eb";
import axios from "axios";
import { useState } from "react";
import MyHeader from "../../components/header/Header";

const Home = ({
  ögün,
  setOgün,
  food,
  setFood,
  foodList,
  setFoodList,
  düzenle,
}) => {
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const APP_ID = "4e9f05eb";

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  // const ögünTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const getData = async () => {
    if (food === "") {
      return;
    } else {
      const { data } = await axios.get(url);
      setFoodList(data.hits);
    }
  };
  const [inputIc, setInputIc] = useState("");
  return (
    <div>
      <MyHeader
        düzenle={düzenle}
        ögün={ögün}
        setOgün={setOgün}
        food={food}
        setFood={setFood}
        getData={getData}
        foodList={foodList}
        setInputIc={setInputIc}
        inputIc={inputIc}
      />
    </div>
  );
};

export default Home;
