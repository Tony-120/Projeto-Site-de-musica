import React,{useState} from "react"
import "./Login.css";
import axios from 'axios';
import Copyright from "./Copyright"

const Login= () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginValido, setLoginValido] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/aluno', {
          email: email,
          senha: senha
      });

      // Verificando se o aluno existe
      if (response.status === 200) {
        console.log(response);
        console.log('Aluno encontrado');
        window.location.href = '/home';
        setLoginValido(true);

      } else {
        console.log('Credenciais inválidas');
        setLoginValido(false);
        console.log(response);
      }
    } catch (error) {
      // Lidar com erros
      console.error('Ocorreu um erro:', error);
    }  
  }
  return ( 
    <>     
    <form onSubmit={handleSubmit}>
    <div class="container py-5 h-100 pt">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    
                    <h4 class="mt-1 mb-5 pb-1">Entre com sua conta</h4><hr></hr><br></br>
                  </div>
                  <form>                    
                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">E-mail</label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="form2Example11" class="form-control"
                        placeholder="E-mail" required/>                      
                    </div>  

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example22">Senha</label>
                      <input type="password" value={senha} onChange={e => setSenha(e.target.value)} id="form2Example22" class="form-control" placeholder="Senha"/>                      
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button type ="submit" onClick={handleSubmit} class="btn btn-dark btn-block fa-lg  mb-4">Entrar</button>
                      {loginValido && <p>Credenciais válidas. Acesso concedido!</p>}
                      {!loginValido && <p>Credenciais inválidas. Acesso negado!</p>}
                      <br></br>
                      <a class="text-muted" href="/RecuperarSenha">Esqueceu a senha?</a>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Ainda não tem uma conta?</p>
                      <a href="/Cadastro"><button type="button" class="btn btn-outline-dark">Criar nova</button></a>
                    </div>                    
                  </form>
                </div>                
              </div>

              <div class="col-lg-6 d-flex align-items-center" id="img">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4" id="image-login">
                  <h4 class="mb-4">Bem-vindo a SONGG</h4>
                  <p class="small mb-0 ">O SONGG consiste em uma ferramenta onde escolas de música podem oferecer seus serviços de ensino. <br></br>
                  Os alunos poderão se cadastrar por meio da plataforma e além disso poderão verificar as escolas mais próximas baseadas na rua 
                  inserida no momento do cadastro. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
    </form>     
    </>
    )
  }
export default Login