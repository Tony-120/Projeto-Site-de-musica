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
    <>
          <div class="m" id="conteudo">
            <strong className="texto">Aulas de Musica</strong> 
          </div>
        <div class="position-relative">
            <img src={EncontreAula} alt="EncontreAula"/>
          </div>

        <div class="text-right">
          <img class="float-end mx-auto w-50 h-50" src={PianoImg} alt="piano"/>
        </div>
            <div class="text-center">
              <button class="btn btn-dark col-md-3 " type="submit" id="LeiaMais">Leia mais</button>
            </div>
          <div class= "rodape">
          <img class="mt-5" src={Nota} alt="icon music"/>
          </div>
         
   
    </>
  )
}
export default Home
