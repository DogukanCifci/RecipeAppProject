import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";

const Login = ({ setLogin }) => {
  const [nickName, setNickname] = useState();
  console.log(nickName);
  const navigate = useNavigate();
  const submitFunction = (e) => {
    e.preventDefault();
    navigate("/home");
    setLogin("LOGOUT");
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={submitFunction}>
        <StyledImg src={mealSvg} />
        <Header>{"<Dogukan/>"}Recipe</Header>
        {/* login sayfasındaki yuvarlak olayın içindeki yazı (Header) */}

        <StyledForm>
          {/* 3 kutunun olduğu form  */}
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setNickname(e.target.value)}
          />

          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
