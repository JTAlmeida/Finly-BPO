import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(224, 224, 224);
  font-size: 15px;
  text-align: center;
`;

export const Container = styled.div`
  .whatsapp_float {
    position: fixed;
    transform: all 0.5s ease;
    background-color: #25d366;
    display: block;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    border-right: none;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    bottom: 40px;
    right: 40px;
    border: 0;
    z-index: 100;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .whatsapp_float::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 60px;
    height: 60px;
    background-color: #25d366;
    border-radius: 50%;
    -webkit-animation: pulse-border 1500ms ease-out infinite;
    animation: pulse-border 1500ms ease-out infinite;
  }

  .whatsapp_float::focus {
    border: none;
    outline: none;
  }

  @keyframes pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 767px) {
    .whatsapp_float {
      width: 40px;
      height: 40px;
      bottom: 25px;
      right: 25px;
      font-size: 22px;
    }
  }
`;
