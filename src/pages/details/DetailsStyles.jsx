import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
  text-align: center;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  width: 300px;

  border-radius: 5px;
  color: wheat;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;

    border: 1px solid red;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  font-size: 1.4rem;
  border: 2px solid wheat;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 300px;
    border-radius: 10px;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  color: wheat;
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;

  border-radius: 10px;
  color: wheat;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  background-color: lightgray;

  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
