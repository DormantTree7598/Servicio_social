import React from 'react'
import './navBar.css'

export const NavBar = () => {
  return (
    <div className='NavbarDiv'>
        <a className='Inicio' href='./'>Inicio</a>
        <a className='Proyectos' href='./'>Proyectos</a>
        <a className='Cursos' href='./'>Cursos</a>
        <a className='Espacios' href='./'>Espacios</a>
    </div>
  )
}
export default NavBar;