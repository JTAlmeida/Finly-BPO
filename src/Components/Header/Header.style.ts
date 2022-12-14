import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  color: rgb(0, 0, 0);
  font-size: 30px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: rgb(179, 141, 104);
  }

  p {
    font-size: 40px;
    font-weight: 600;
    color: rgb(49, 95, 93);
    margin-bottom: 20px;
  }

  h2 {
    padding-left: 5px;
    font-size: 25px;
    margin-bottom: 15px;
  }

  margin-bottom: 50px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;

    h1 {
      font-size: 25px;
      font-weight: 600;
      color: rgb(179, 141, 104);
    }

    p {
      font-size: 25px;
      font-weight: 600;
      color: rgb(49, 95, 93);
      margin-bottom: 20px;
    }

    h2 {
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  width: 100%;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const TopLeftContainer = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const TopRightContainer = styled.div`
  width: 50%;
  align-self: center;

  @media (max-width: 900px) {
    width: 90%;

    img {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  align-items: center;

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Input = styled.input`
  font-size: 17px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgb(49, 95, 93);

  @media (max-width: 900px) {
    min-width: 50px;
    max-width: auto;
  }
`;

export const TextArea = styled.textarea`
  font-size: 17px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgb(49, 95, 93);

  @media (max-width: 900px) {
    min-width: 50px;
    max-width: auto;
  }
`;

export const Button = styled.button`
  font-size: 30px;
  background-color: rgb(49, 95, 93);
  color: rgb(255, 255, 255);
  width: 300px;
  height: 40px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media (max-width: 614px) {
    min-width: 50px;
    max-width: auto;

    margin-bottom: 20px;
  }
`;
