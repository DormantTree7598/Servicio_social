import React, { useState } from "react";
import styled from "styled-components";

export const Rectangulos = () => {
  return (
    <Recmain>
      <Primero>
        <span>Hola</span>
      </Primero>
    </Recmain>
  );
};

export default Rectangulos;

const Recmain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const Primero = styled.div`
  position: absolute;
  width: 29%;
  height: 70%;
  left: 7%;
  top: 30%;
  background: #dedede;
  border-radius: 24px;
  :span {
    position: absolute;
    width: 18%;
    height: 10%;
    left: 144px;
    top: 68px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 186.52%;
    display: flex;
    align-items: center;
    letter-spacing: 0.255em;
    color: #5c5c5c;
  }
`;
