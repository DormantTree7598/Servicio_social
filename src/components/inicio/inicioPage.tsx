import React from "react"
import './inicioPage.css'
import Logo from '../../assets/LogoIbero.png'
import NavBar from "../navbar/navBar"
import Line from '../../assets/Line24.png'
import EastIcon from '@mui/icons-material/East';


export const Inicio = () => {
  return (
    <div className="inicioDiv">
        <NavBar/>
        <img src={Logo} alt="LogoIbero" className="LogoIbero"/>
        <div className="line-title"></div>
        <h1 className="Titulo">DEPARTAMENTO DE CIENCIAS E INGENIERIAS</h1>
        <a className="Subtitulo">INSTITUTO DE DISEÑO E INOVACION TECNOLOGICA</a>
        <a className="Sobreus">Sobre nosotros</a>
        <a className="Ingenieria">INGENIERIA</a>
        <div className="Buttom">
          <a className="Conoce-button" href="">Conocer mas</a>
          <div className="Arrow-conoce">
            <EastIcon style={{ color: '#1A202C' }} />
          </div>
          
        </div>
    </div>
      
  )
}


export default Inicio;
