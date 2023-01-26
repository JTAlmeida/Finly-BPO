import { Container, Wrapper } from "./Footer.style";

export default function Footer() {
  return (
    <>
      <Wrapper>
        ©2023 Finly BPO - Gestão Financeira - Todos os direitos reservados.
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
