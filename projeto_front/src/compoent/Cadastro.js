import React, { useState } from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cadastro.css"

const Cadastro = () => {

  const [nome, setNome] = useState("")
  const [cpf, setCPF] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cep, setCEP] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [data, setData] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/aluno', {
      nome,
      cpf,
      endereco,
      cep,
      telefone,
      email,
      senha,
      data
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }
  return (
    <>
      <form className="col-md-12" onSubmit={handleSubmit}>

        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">            
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <h2 class="mt-1 mb-5 pb-1">Crie sua conta</h2>
                    <hr></hr>
                    <h5 class="label-subtitulo">Já possui cadastro?</h5>                   
                    <a href="/login"class="link-login">Login</a>
                  </div>
                  <br></br>
                  <form>

                  <div class="form-row">
                    <div class="row">

                      <div class="form-group col-md-6 pb-4">
                        <label>Nome</label>
                        <input type="text" class="form-control" id="inserir-nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}></input>  
                      </div>
                                          
                      <div class="form-group col-md-3 pb-4">
                        <label>CPF </label>
                        <input type="text" class="form-control" id="inserir-cpf" placeholder="CPF" value={cpf} onChange={e => setCPF(e.target.value)}></input>
                      </div>
      
                      <div class="form-group col-md-3 pb-4">
                        <label>Data de Nascimento</label>                      
                        <input class="input-home" type="date" id="birthday" name="birthday" value={data} onChange={e => setData(e.target.value)}></input>
                      </div>
                    </div>                  
                  </div> 


                  <div class="form-row">
                    <div class="row">
                      <div class="form-group col-md-6 pb-4">
                        <label>Email</label>
                        <input type="email" class="form-control" id="inserir-email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>  
                      </div>                    
                      <div class="form-group col-md-6 pb-4">
                        <label>Senha</label>
                        <input type="password" class="form-control" id="inserir-senha" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                      </div>
                    </div>                  
                  </div> 

                  <div class="form-row">
                    <div class = "row"> 
                      <div class="form-group col-md-6 pb-4">
                        <label>Telefone</label>
                        <input type="tel" class="form-control" id="inserir-telefone" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}></input>
                      </div>
                      <div class="form-group col-md-6 pb-4">
                        <label>Endereço</label>
                        <input type="text" class="form-control" id="inserir-endereco" placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)}></input>
                      </div>                
                    </div>                
                  </div>                

                  <div class="form-row">
                    <div class = "row"> 
                      <div class="form-group col-md-4 pb-4">
                        <label>Cidade</label>
                        <input type="text" class="form-control" id="inserir-cidade" ></input>
                      </div>
                      <div class="form-group col-md-4 pb-4">
                        <label>Estado</label>
                        <select id="inserir-estado" class="form-control">
                          <option selected>Escolha...</option>
                          <option>AC</option>
                          <option>AL</option>
                          <option>AM</option>
                          <option>BA</option>
                          <option>CE</option>
                          <option>DF</option>
                          <option>ES</option>
                          <option>GO</option>
                          <option>MA</option>
                          <option>RJ</option>
                          <option>RS</option>
                          <option>SC</option>
                          <option>SP</option>
                          <option>PE</option>
                          <option>TO</option>
                        </select>
                      </div>
                      <div class="form-group col-md-4 pb-4">
                        <label>CEP</label>
                        <input type="text" class="form-control" id="inserir-cep" value={cep} onChange={e => setCEP(e.target.value)}></input>
                      </div>                    
                    </div>  
                  </div>
                  <div class="text-center">
                  <button type="submit" class="btn btn-dark col-md-6 " onClick={handleSubmit}>Cadastrar</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
    
  )
}

export default Cadastro;

