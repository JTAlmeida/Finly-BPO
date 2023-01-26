import { Container, Wrapper } from "./Footer.style";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
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
          onClick={() => {
            navigate("/thanks");
          }}
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </Container>
    </>
  );
}
