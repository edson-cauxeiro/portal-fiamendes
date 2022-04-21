
import logoImage from "../../assets/images/logo.png";

import './styles.css'


function index() {
  return (
    <>
      <footer className="footer">

          <div className="box-container">

              <div className="box">
                <div className="logoImg">
                  <img src={logoImage} alt="Logotipo do Grupo Fiamendes"  />
                </div>

                <p>A FIAMENDES Prestação De Serviço E Comercio(SU),LDA. Empresa 100% Angolana.</p>
                  
              </div>

              <div className="box">
                <h3>Socials Contacts</h3>
                <div className="share">
                    <a href="?#" className="fab fa-facebook-f"></a>
                    <a href="?#" className="fab fa-instagram"></a>
                    <a href="?#" className="fab fa-linkedin"></a>
                    <a href="?#" className="fab fa-twitter"></a>
                  </div>
              </div>
            
          </div>

          <div className='credit'>created by <span>Mesu Digital</span> all rights reserved</div>

      </footer> 
    </>
  )
}


export default index
