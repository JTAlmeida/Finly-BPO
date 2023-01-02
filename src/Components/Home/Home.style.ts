import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid rgba(100, 100, 111, 0.2);
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  height: auto;
  width: 100%;
  font-size: 30px;
  margin-bottom: 40px;

  > h5 {
    margin-left: 45%;
  }

  @media (max-width: 900px) {
    > h5 {
      margin: auto;
    }
  }
`;

export const ColoredContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
  height: auto;
  width: 100%;
  font-size: 30px;
  margin-bottom: 40px;
  padding: 40px 0;

  color: rgb(255, 255, 255);
  background: rgb(8, 26, 25);
  background: linear-gradient(
    0deg,
    rgba(8, 26, 25, 0.9) 0%,
    rgba(51, 152, 147, 1) 100%
  );
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 20%;

  > img {
    max-width: 100%;
  }

  > div {
    font-size: 25px;
    color: rgb(179, 141, 104);
    width: 100%;
    margin-bottom: 10px;
  }

  > h1 {
    font-size: 40px;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: auto;
    text-align: center;

    > img {
      margin-bottom: 20px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 20%;
  text-align: start;
  justify-content: center;

  > h1 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  > p {
    font-size: 22px;
    margin-bottom: 5px;
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: auto;

    > h1 {
      font-size: 25px;
    }
    > p {
      font-size: 20px;
    }
  }
`;

export const SingleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10%;
  justify-content: space-evenly;

  > h1 {
    width: 100%;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 22%;

    > img {
      max-width: 95px;
      margin-bottom: 10px;
      align-self: center;
    }

    h1 {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 10px;
    }

    > p {
      font-size: 20px;
    }
  }

  @media (max-width: 1270px) {
    > div {
      > h1 {
        font-weight: 600;
      }
    }
  }

  @media (max-width: 900px) {
    width: 90%;
    margin: auto;
    text-align: center;

    > div {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
