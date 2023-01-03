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
import comparativeChart from "../../assets/comparativechart.gif";

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
              É como ter um especialista em finanças empresariais em home office
              trabalhando para sua empresa, só que sem a dor de cabeça dos
              encargos trabalhistas e <strong>por um preço muito menor</strong>,
              um valor justo que cabe no seu bolso.
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
          <div className="centered">
            <img src={comparativeChart} alt="loading..."></img>
          </div>
        </Container>
        <Container>
          <div className="wrapper centered">
            <h2>E aí, vai perder esta </h2>
            <h1>oportunidade?</h1>
            <div className="link_wrapper">
              <a
                href="https://wa.me/5561992649794"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale conosco no whats!
              </a>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
