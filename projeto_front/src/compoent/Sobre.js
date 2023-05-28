import React from 'react';
import './Sobre.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nota from './Imagens/icon music.PNG';
import Copyright from './Copyright'

const Sobre = () => {
  return (
    
    <div class="">
    <h1 class="mt-5 text-center">Escola de Música</h1>
    
    <section class="hero">
    <p>
      Bem-vindo à nossa Escola de Música, onde a paixão pela música encontra o ensino de alta qualidade.
      Nossa missão é fornecer um ambiente inspirador e educacional para estudantes de todas as idades e níveis de habilidade.
      Nossos professores altamente qualificados estão comprometidos em ajudar você a desenvolver suas habilidades musicais,
      seja você um iniciante entusiasmado ou um músico avançado em busca de aprimoramento.
    </p>
    <p>
      Oferecemos uma ampla variedade de cursos e disciplinas musicais, desde aulas de instrumentos como piano, violão, bateria e violino,
      até teoria musical, composição e prática de conjunto. Nossa abordagem de ensino combina elementos teóricos e práticos,
      garantindo que você tenha uma base sólida de conhecimento musical e a capacidade de aplicá-lo de forma criativa.
    </p>
    <p>
      Além das aulas regulares, também organizamos workshops, recitais e eventos especiais, nos quais você terá a oportunidade de
      se apresentar e compartilhar sua paixão pela música com outros estudantes e membros da comunidade musical.
      Estamos comprometidos em criar um ambiente acolhedor e encorajador, onde você possa se expressar e crescer como músico.
    </p>
    
    <img className="mt-4 w-25 h-25" src={Nota} alt="icon music" />
        
  </section>
  <Copyright />
  </div>
  );
}

export default Sobre;
