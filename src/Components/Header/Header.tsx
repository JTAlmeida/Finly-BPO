import { Container, Wrapper } from "./Header.style";
import logo from "../../assets/logo326.png";

export default function Header() {
  return (
    <>
      <Wrapper>
        <img src={logo} alt="logo" />
        Cor de fonte 1
        <p>Cor de fonte 2</p>
        <h1>Cor de fonte 3</h1>
      </Wrapper>
    </>
  );
}
