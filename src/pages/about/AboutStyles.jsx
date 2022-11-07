import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #00939c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  min-height: 80vh;
  width: 100%;
`;

export const AboutImage = styled.img`
  width: 400px;
  height: 300px;
  margin: 0 auto;
`;

export const MySpan = styled.span`
  color: white;
  font-size: 2rem;
`;

export const AboutHeader = styled.h5`
  font-weight: 900;
  color: black;
  word-spacing: 7px;
  text-align: center;
  font-size: 1.5rem;
  @media (max-width: 726px) {
    font-size: 1rem;
  }
`;

export const AboutArticle = styled.div`
  border: 1px solid white;
  width: 80%;
  margin: 0 auto;
  background-color: #00939c;
  text-align: end;
  padding-right: 20px;
  padding-top: 20px;
  color: black;
  line-height: 45px;
  word-spacing: 5px;
  font-size: 1.5rem;
  @media (max-width: 726px) {
    font-size: 1rem;
  }
`;

export const Text = styled.div`
  color: black;
  font-weight: 600;
`;
