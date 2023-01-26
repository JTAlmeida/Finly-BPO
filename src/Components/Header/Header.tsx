import {
  Wrapper,
  LogoContainer,
  TopLeftContainer,
  TopRightContainer,
  Input,
  Form,
  TextArea,
  Button,
} from "./Header.style";
import logo from "../../assets/logo326.png";
import headerImg from "../../assets/headerimg.png";
import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !phoneNumber) {
      Swal.fire("Por favor, preencha todos os campos.");
    }
    Swal.fire("E-mail enviado! Retornaremos seu contato assim que possível.");

    const templateParams = {
      from_name: name,
      message,
      email,
      phoneNumber,
    };

    emailjs
      .send(
        "service_fpf8nap",
        "template_1r404bd",
        templateParams,
        "Yt1BnDaMsJm2ETy6O"
      )
      .then(
        (res) => {
          console.log("email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setMessage("");
          setPhoneNumber("");
          navigate("/thanks");
        },
        (err) => {
          console.log("ERRO", err);
        }
      );
  }

  function phoneMask(e: any) {
    let tecla = e.key;
    let telefone = e.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
      telefone = telefone + tecla;
      let tamanho = telefone.length;

      if (tamanho >= 12) {
        return false;
      }

      if (tamanho > 10) {
        telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (tamanho > 5) {
        telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (tamanho > 2) {
        telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
      } else {
        telefone = telefone.replace(/^(\d*)/, "($1");
      }

      e.target.value = telefone;
      setPhoneNumber(telefone);
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
      return false;
    }

    if (["Backspace"].includes(tecla)) {
      setPhoneNumber(telefone.slice(0, -1));
      return false;
    }
  }
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>

        <TopLeftContainer>
          Pare de perder tempo...
          <h1>Simplifique a gestão financeira</h1>
          <p>do seu negócio!</p>
          <Form onSubmit={sendEmail}>
            <h2>
              Deixe seu cadastro nos explicando melhor sobre seu negócio e{" "}
              <strong>receba uma avaliação gratuita:</strong>
            </h2>
            *Nome e sobrenome:
            <Input
              type="text"
              placeholder="Digite seu nome e sobrenome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            *E-mail:
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            *DDD+celular:
            <Input
              type="tel"
              placeholder="ex.: (11) 9 9999-9999"
              onKeyDown={(e) => phoneMask(e)}
              value={phoneNumber}
              required
            />
            *Mensagem:
            <TextArea
              placeholder="Digite sua mensagem..."
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </TopLeftContainer>
        <TopRightContainer>
          <img src={headerImg} alt="" />
        </TopRightContainer>
      </Wrapper>
    </>
  );
}
