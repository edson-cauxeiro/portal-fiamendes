import React, { useState } from "react";
import { Link } from 'react-router-dom'

import logoImage from "../../assets/images/logo.png";

import './styles.css';


function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showMenu, setShowMenu] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [header, setHeader] = useState(false);


  const changeOnScroll = () => {
    if(window.scrollY >= 50){
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeOnScroll);

  return (
    <>
      <header className={header ? 'header navScroll' : 'header'}>  
          <div className="logoImg">
            <img src={logoImage} alt="Logotipo do Grupo Fiamendes"  />
          </div>

          
            <nav className="navbar" id={showMenu ? "active" : ""}>
              <Link to="/">Inicio</Link>
              <Link to="/about">Sobre</Link>
              <Link to="/#services">Serviços</Link>
              {<Link to="?#">Produtos</Link>}
              <Link to="/contact">Contato</Link>   
            </nav>
             
         <div className="menu-btn">
           <a href="?#" id="menu-btn" onClick={() => setShowMenu(!showMenu)}><i className="fas fa-bars"></i></a>
         </div> 
      </header>
    </>
  )
}

export default index;