import React from "react";
import { ProjectMainDiv } from "../styles/styleProjectmain";
import NavBarComponent from "../components/navbar/navBar";
import Header from "../components/Header/Header";
import styled from "styled-components";
import InicioT from "../components/inicio/inicioPage";

export const ProjectMain = () => {
  return (
    <ProjectMainDiv>
      <HeaderWraper>
        <Header />
      </HeaderWraper>
      <Navbar>
        <NavBarComponent />
      </Navbar>
      <Titulo>
        <InicioT />
      </Titulo>
    </ProjectMainDiv>
  );
};
export default ProjectMain;

const HeaderWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 10.3%;
  margin: 0;
  padding: 0;
  top: 0%;
  left: 0%;
`;
const Navbar = styled.div`
  position: absolute;
  width: 11%;
  height: 80%;
  margin: 0;
  padding: 0;
  top: 10.3%;
  left: 0%;
  opacity: 1;
  z-index: 1;
`;
const Titulo = styled.div`
  position: absolute;
  width: 88%;
  height: 79%;
  margin: 0;
  padding: 0;
  left: 11%;
  top: 10.3%;
`;
