import { Container, Wrapper } from "./Footer.style";
import logo from "../../assets/logo326.png";

export default function Footer() {
  return (
    <>
      <Wrapper>
        © 2022 Finly BPO - Gestão Financeira - Todos os direitos reservados.
        CNPJ: 00.000.000/0000-00 | (00) 00000-0000
      </Wrapper>
      <Container>
        <a
          href="https://wa.me/5561992649794"
          className="whatsapp_float"
          id="toggle1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </Container>
    </>
  );
}
