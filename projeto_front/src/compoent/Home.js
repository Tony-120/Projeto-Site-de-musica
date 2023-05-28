import React from "react"
import PianoImg from './Imagens/piano.jpg'
import Nota from './Imagens/icon music.PNG'
import EncontreAula from './Imagens/Encontre sua escola.PNG'
import "./Home.css"

const Home = () => {
  return (

    <section className='home_container'>
        <h1>Aulas de musica</h1>
        <img src={EncontreAula} alt="icon music" id="Aula"/>
        <button type="submit" id="LeiaMais">Leia mais</button>   

            <div className="Piano">
              <img src={PianoImg} alt="piano" id="piano"/>
            </div>

            <div className="imagem" id="icone">
              <img src={Nota} alt="Icon Music"/>
            </div>
      </section>
       

    
  )
}
export default Home
