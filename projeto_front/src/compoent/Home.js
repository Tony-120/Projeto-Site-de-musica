import React, { useEffect } from "react";
import PianoImg from './Imagens/piano.png'
import Nota from './Imagens/icon music.PNG'
import EncontreAula from './Imagens/Encontre sua escola.PNG'
import "./Home.css"
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const history = useHistory();
  // useEffect(() => {
  //   // Trava a rolagem da página quando o componente é montado
  //   document.body.style.overflow = 'hidden';
  // });

  const handleLeiaMaisClick = () => {
    history.push('/sobre');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="text-center">
          <div className="text-center" id="conteudo ">
            <strong className="texto">Aulas de Música</strong> 
          </div>
          <div className="position-relative">
            <img className="img-fluid w-70 h-70 transition-scale" src={EncontreAula} alt="EncontreAula"/>
          </div>
        </div>
        
        
      </div>
      <div className="text-center">
        <button className="btn btn-dark btn-center ml-3 w-25 text-center " type="submit" id="LeiaMais" 
        onClick={handleLeiaMaisClick}>Leia Mais</button>
        </div>
        <div className="row mt-5 ml-6">
          <div className="col justify-content-center" id="notamusica">
            <img className="icon img-static " src={Nota} alt="icon music" />
          </div>
            <div className="col text-end position-relative">
              <img className="mx-auto text-start img-static " src={PianoImg} alt="piano" />
            </div>
      </div>

    </div>
  )
}

export default Home;

