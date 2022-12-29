import {
  ColoredContainer,
  Container,
  HorizontalLine,
  LeftSide,
  RightSide,
  SingleDiv,
  Wrapper,
} from "./Home.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import business from "../../assets/homeimg1.png";
import money from "../../assets/money96.png";
import chart from "../../assets/combochart96.png";
import barcode from "../../assets/barcode96.png";
import invoice from "../../assets/invoicedolar96.png";

export default function Home() {
  return (
    <>
      <Header />
      <HorizontalLine />
      <Wrapper>
        <Container>
          <LeftSide>
            <div>• SOBRE NÓS</div>
            <h1>A FinlyBPO!</h1>
            <img src={business} alt="business" />
          </LeftSide>
          <RightSide>
            {" "}
            <h1> O que somos?</h1>
            <p>
              Como especialistas em BPO Financeiro teremos controle do que entra
              e sai do seu caixa e, com isso, conseguimos gerar informações
              precisas que indicam{" "}
              <strong>o caminho certo para crescer com seu negócio.</strong>
            </p>
            <p>
              É como se ter um especialista em finanças empresariais em home
              office trabalhando para sua empresa, só que sem a dor de cabeça
              dos encargos trabalhistas e{" "}
              <strong>por um preço muito menor</strong>, um valor justo que cabe
              no seu bolso.
            </p>
          </RightSide>
        </Container>
        <ColoredContainer>
          <SingleDiv>
            <h1>Aqui estão alguns serviços que oferecemos</h1>
            <div>
              <img src={money} alt="money" />
              <h1>Gestão de contas a pagar e contas a receber</h1>
              <p>
                Economize tempo e não precisará deixar de anteder seu cliente.
              </p>
            </div>
            <div>
              <img src={chart} alt="chart" />
              <h1>Acompanhamento de métricas e resultados</h1>
              <p>
                Tenha um dashboard financeiro na palma da mão e conte com
                informações para expandir em uma velocidade que jamais pensou
                ser possível.
              </p>
            </div>
            <div>
              <img src={barcode} alt="barcode" />
              <h1>Emissão e envio de boletos bancários</h1>
              <p>Emissão de boletos de forma fácil e rápida.</p>
            </div>
            <div>
              <img src={invoice} alt="invoice" />
              <h1>Emissão e envio de notas fiscais</h1>
              <p>
                Nossa equipe está disponível para que tudo aconteça sem
                problemas e você continue focado em fazer outras coisas.
              </p>
            </div>
          </SingleDiv>
        </ColoredContainer>
        <Container>
          <h5>Em construção...</h5>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
