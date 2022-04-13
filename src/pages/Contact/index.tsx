
import contactEmail from '../../assets/images/email.svg'
import phoneIcon from '../../assets/images/icon-1.png'
import emailIcon from '../../assets/images/icon-2.png'
import addressIcon from '../../assets/images/icon-3.png'

import './styles.css';


export function Contact() {
  return (
    <>
      <section className="contact" id="contact">
          <h1 className="heading"> Fale <span>Connosco</span></h1>

            <div className="icons-container">
                <div className="icons">
                    <img src={phoneIcon} alt="Telefone da Empresa Fiamendes" />
                    <h3>Telefone</h3>
                    <p>(+244) 923 740 366</p>
                </div>

                <div className="icons">
                    <img src={emailIcon} alt="Email da Empresa Fiamendes" />
                    <h3>E-mail</h3>
                    <p>fiamendesprestacao18@gmail.com</p>
                </div>

                <div className="icons">
                    <img src={addressIcon} alt="Endereço da Empresa Fiamendes" />
                    <h3>Endereço</h3>
                    <p>Bairro Patriota, Rua Nº130, Casa NºEB74</p>
                    <p>NIF: 5417615676</p>
                    <p>Luanda - Angola</p>
                </div>
            </div>

          <div className="row">
              <div className="image">
                <img src={contactEmail} alt="contact" />
              </div>

              <div className="form-container">
                <form action="">

                  <div className="inputBox">
                    <input type="text" placeholder="primeiro nome"/>
                    <input type="text" placeholder="ultimo nome"/>
                  </div>

                  <div className="inputBox">
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="assunto"/>
                  </div>
                  <textarea name="" id=""  placeholder="mensagem"></textarea>

                  <input type="submit" className="btn" value="Enviar"/>
                </form>
              </div>
          </div>
       
        </section>
    
    </>
  )
}
