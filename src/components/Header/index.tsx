import React, { useState } from "react";
import { Link } from 'react-router-dom'

import './styles.css';


function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
          <a href="#home" className="logo"><span>Fia</span>Mendes</a>

          
            <nav className="navbar" id={showMenu ? "active" : ""}>
              <Link to="/">Inicio</Link>
              <Link to="/about">Sobre</Link>
              {<Link to="?#">Blog</Link>}
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