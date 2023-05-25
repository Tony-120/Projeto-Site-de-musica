
import React, { useEffect } from "react";
import PianoImg from './Imagens/piano.jpg'
import Nota from './Imagens/icon music.PNG'
import EncontreAula from './Imagens/Encontre sua escola.PNG'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  useEffect(() => {
    // Trava a rolagem da página quando o componente é montado
    document.body.style.overflow = 'hidden';
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="m" id="conteudo">
            <strong className="texto">Aulas de Musica</strong> 
          </div>
          <div className="position-relative">
            <img className="mx-auto text-start" src={EncontreAula} alt="EncontreAula"/>
          </div>
        </div>
        
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center ">
          <button className="btn btn-dark ml-6  w-100" type="submit" id="LeiaMais">Leia mais</button>
        </div>
        
      </div>
      <div className="row mt-0 ml-6">
        <div className="col text-start">
        <div className="col text-end">
          <img className="mx-auto text-start" src={PianoImg} alt="piano"/>
        </div>
          <img src={Nota} alt="icon music"/>
        </div>
      </div>
    </div>
  )
}

export default Home