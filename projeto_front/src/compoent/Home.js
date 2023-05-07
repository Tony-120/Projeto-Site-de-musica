import React from "react"
import PianoImg from './Imagens/piano.jpg'
import Nota from './Imagens/icon music.PNG'
import EncontreAula from './Imagens/Encontre sua escola.PNG'
import "./Home.css"

const Home = () => {
  return (
    <>
        <img className="piano" src={PianoImg} alt="piano"/>
        {/* <div class="corpo">
        <img src={PianoImg} alt="piano"/>
        <img src={Nota} alt="icon music"/>

        
        <div id="conteudo">
            <strong className="texto">Aulas de Musica</strong>
            <img src={EncontreAula} alt="icon music"/>
            <div>
            <button type="submit" id="LeiaMais">Leia mais</button>
            </div>
        </div>
        </div> */}

      
   
    </>
  )
}
export default Home
