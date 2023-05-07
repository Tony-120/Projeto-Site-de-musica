import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logoImg from './Imagens/logo.PNG'

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
      <img className="Logo" src={logoImg} alt="Logo"/>

            {/* Lista da Navbar la em cima */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/sobre' className='sobre'>
            <li>Sobre</li>
          </Link>
          <Link to='/Cadastro' className='Cadastro'>
            <li>Cadastro</li>
          </Link>
          <Link to='/login' className='login'>
            <li>Login</li>
          </Link>
        </ul>
        {/* Icone importado com a biblioteca quando clicar */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
