import React from 'react';
import './Sobre.css';
import Nota from './Imagens/icon music.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sobre = () => {
  return (
    <div class="">
    <h1 class="mt-5 text-center">Projeto SONGG</h1>
    <section class="hero">
      <p>
        Bem-vindo ao Projeto SONGG, uma plataforma inovadora de cadastro de escolas de música. Nosso objetivo é conectar escolas de música de alta qualidade com alunos apaixonados pela arte da música.
      </p>
      <p>
        O Projeto SONGG foi desenvolvido para simplificar o processo de busca e cadastro de escolas de música. Escolas interessadas em oferecer seus serviços podem se cadastrar facilmente em nossa plataforma, fornecendo informações detalhadas sobre suas especialidades, professores qualificados e instalações modernas.
      </p>
      <p>
        Além disso, os alunos têm a oportunidade de se cadastrar no Projeto SONGG, criando um perfil personalizado que reflete seus interesses musicais, nível de habilidade e localização geográfica. Com base nessas informações, nossa plataforma oferece uma função de busca que permite aos alunos encontrar as escolas mais próximas de sua região.
      </p>
      <p>
        Uma das principais características do Projeto SONGG é a exibição das escolas em um mapa interativo. Ao realizar uma busca, os alunos podem visualizar as escolas em um mapa e obter informações relevantes sobre cada uma delas. Essa funcionalidade torna o processo de escolha mais intuitivo e ajuda os alunos a tomar decisões informadas sobre onde buscar educação musical.
      </p>
      <p>
        Valorizamos a qualidade do ensino musical e acreditamos que todos os estudantes merecem ter acesso a escolas de música que atendam às suas necessidades e expectativas. É por isso que nos empenhamos em criar uma plataforma que facilite essa conexão entre escolas e alunos, promovendo a troca de conhecimento e a paixão pela música.
      </p>
      <p>
        O Projeto SONGG está comprometido em fornecer uma experiência de alta qualidade tanto para as escolas quanto para os alunos. Nossa equipe está sempre empenhada em aprimorar a plataforma, adicionando recursos e funcionalidades que beneficiem todos os usuários.
      </p>
      <p>
        Junte-se ao Projeto SONGG e faça parte de uma comunidade vibrante de amantes da música. Cadastre-se agora mesmo e comece sua jornada musical conosco!
      </p>
      <img className="mt-4 w-25 h-25" src={Nota} alt="icon music" />
      </section>
    </div>
    
  );
}

export default Sobre;
