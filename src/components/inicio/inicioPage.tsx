import React from "react";
import styled from "styled-components";

export const InicioT = () => {
  return (
    <TituloWrap>
      <Encabezado>DEPARTAMENTO DE CIENCIAS E INGENIERIAS</Encabezado>
      <Subtitulo>INSTITUTO DE DISEÑO E INOVACION TECNOLOGICA</Subtitulo>
      <Line></Line>
    </TituloWrap>
  );
};

export default InicioT;

const TituloWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0px;
`;
const Encabezado = styled.div`
  position: absolute;
  width: 58%;
  height: 18%;
  left: 8%;
  top: 21%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15em;
  color: #393939;
`;
const Subtitulo = styled.div`
  position: absolute;
  width: 44%;
  height: 4%;
  left: 8%;
  top: 44%;
  font-family: "DM Sans";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 202.7%;
  display: flex;
  align-items: center;
  letter-spacing: 0.435em;
  color: #393939;
`;
const Line = styled.div`
  position: absolute;
  width: 626px;
  height: 0px;
  left: 307px;
  top: 360px;
  border: 1px solid #5c5c5c;
`;
