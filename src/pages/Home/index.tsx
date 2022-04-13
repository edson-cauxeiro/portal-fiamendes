import React from 'react'

import farmacia from '../../assets/images/pharmacist.svg';
import grafica from '../../assets/images/designer.svg';
import deposito from '../../assets/images/remedy.svg';
import servicos from '../../assets/images/heavy_box.svg';

import image4 from "../../assets/img-4.jpg";
import image5 from "../../assets/img-5.jpg";
import image6 from "../../assets/img-6.jpg";

import './styles.css'

export function Home() {

  return(
    <>
      {/* Home Sections Start */}
      <section className="home" id="home">

        <div className="banner">
            <div className="title-text">
              <h3>Bem vindos à FiaMendes</h3>
            </div>
   
           <div className="subtitle-text"><p>Um Grupo Cheio de Soluções para o Teu Negocio</p></div> 
            {/* <a href="?#" className="btn">Saiba mais</a> */}
        </div>   

      </section>
        {/*  Home Sections Ends  */}

        {/* Home-Main Sections Start */}
        <section className="group-service" id="group-service">

        <h1 className="heading"> Nossos <span>Seviços</span></h1>

        <div className="row">
            <div className="image">
              <img src={farmacia} alt="farmacia" />
            </div>

            <div className="content">
                <h3>AMIVIK Farmacias</h3>
                <p>
                  A AMIVIK Farmacia disponibilizar aos seus clientes produtos 
                  farmacêuticos de qualidade, a preços acessiveis, contribuindo
                  para a saúde, bem-estar e qualidade de vida da população...
                </p>
                
                <p> <strong>Rua 4 Casa nº34, Cassenda - Maianga,Tln: (+244) 222 734 880</strong></p>
                {/*  <a href="?#" className="btn">Saiba mais</a>  */}
                
            </div>
        </div>

        <div className="row">
          
            <div className="content">
                <h3>Grafica FiaMendes</h3>
                <p>
                  A FM Designer Grafico conta com quadros qualificados que oferecem
                  os melhores serviços de Criação de Logotipos, Flyers, Panfletes e outros
                  serviços com a qualidade obrigada pelo mercado...                 
                </p>
                <p>
                  <strong>fmdesignergrafico@gmail.com</strong>
                </p>
                {/*  <a href="?#" className="btn">Saiba mais</a>  */}
            </div>

            <div className="image">
              <img src={grafica} alt="farmacia" />
            </div>

        </div>

        <div className="row">
            <div className="image">
              <img src={deposito} alt="farmacia" />
            </div>

            <div className="content">
                <h3>Deposito de Medicamentos FiaMendes</h3>
                <p>
                  O Nosso Deposito de Medicamentos tem em sua disposição para 
                  comercializar produtos de origem controlada, 
                  fruto das mais modernas soluções para os cuidados 
                  de saúde. Tem uma oferta completa ao nível de produtos 
                  farmacêuticos...
                </p>
                {/*  <a href="?#" className="btn">Saiba mais</a>  */}
            </div>
        </div>

        <div className="row">
          
            <div className="content">
                <h3>Fiamendes Prestação de Serviço e Comercio</h3>
                <p>
                  A Fiamendes Prestação de Serviços e Comercio oferece serviços 
                  nas mais diversas areas com Transporte Camionagem e Comercio de Materiais
                  Desportivos...               
                </p>
                <p>
                  <strong>fiamndesprestacao18@gmail.com</strong>
                </p>
                {/*  <a href="?#" className="btn">Saiba mais</a>  */}
            </div>

            <div className="image">
              <img src={servicos} alt="farmacia" />
            </div>

        </div>


      </section>

      <section className="item" id="item">

          <div className="items-container">
              <div className="item">
                  <img src={image4} alt="Telefone da Empresa Fiamendes" />
                  <h3>AMIVIK Farmacia</h3>
              </div>

              <div className="item">
                  <img src={image5} alt="Email da Empresa Fiamendes" />
                  <h3>FM Designer Grafico</h3>
              </div>

              <div className="item">
                  <img src={image6} alt="Endereço da Empresa Fiamendes" />
                  <h3>Deposito de Medicamentos Fiamende</h3>
              </div>

          </div>

      </section>
      
    </>
  )
}