/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom'
import './styles.css'


function index() {
  return (
    <>
      <footer className="footer">

          <div className="box-container">

              <div className="box">
                <h3 className="logo"><span>Fia</span>Mendes</h3>
                <p>A FIAMENDES Prestação De Serviço E Comercio(SU),LDA. Empresa 100% Angolana.</p>
                  <div className="share">
                    <a href="?#" className="fab fa-facebook-f"></a>
                    <a href="?#" className="fab fa-instagram"></a>
                    <a href="?#" className="fab fa-linkedin"></a>
                    <a href="?#" className="fab fa-twitter"></a>
                  </div>
              </div>

              <div className="box">
                <h3>Contact Info</h3>
                <a href="?#" className="links"><i className="fas fa-phone"></i> (+244) 923 740 366</a>
                <a href="?#" className="links"><i className="fas fa-envelope"></i> fiamendesprestacao18@gmail.com</a>
                <a href="?#" className="links"><i className="fas fa-map-marker-alt"></i> BBairro Patriota, Rua Nº130, Casa NºEB74, Luanda - Angola</a>
              </div>

              <div className="box">
                <h3>Links Rapidos</h3>
                <Link  to="/" className="links"><i className="fas fa-arrow-right"></i> Inicio</Link>
                <Link  to="/about" className="links"><i className="fas fa-arrow-right"></i> Sobre</Link>
                <Link to="/contact" className="links"><i className="fas fa-arrow-right"></i> Contato</Link>
                
              </div>
            
          </div>

          <div className='credit'>created by <span>Mesu Digital</span> all rights reserved</div>

      </footer> 
    </>
  )
}


export default index
