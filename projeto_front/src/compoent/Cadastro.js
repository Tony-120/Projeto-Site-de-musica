import React, { useState } from "react"
import axios from 'axios';

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
    <form
        onSubmit={handleSubmit}>
    <section className='hero'>
    <div class="grid-container">   
      
      <div class="titulo">
        <h1 class="titulo-home">Criar Nova Conta</h1>
        <h3 class="label-subtitulo">Já possui cadastro?</h3>  
        <a href="/">Login</a><br></br>
      </div>
      
        <div class="parte1">          
          <input class="input-home" type="text" placeholder=" Nome" value={nome} onChange={e => setNome(e.target.value)}></input>

          <input class="input-home" type="text" placeholder=" CPF" value={cpf} onChange={e => setCPF(e.target.value)}></input>

          <input class="input-home" type="text" placeholder=" Endereço" value={endereco} onChange={e => setEndereco(e.target.value)}></input>

          <input class="input-home" type="text" placeholder=" CEP" value={cep} onChange={e => setCEP(e.target.value)}></input>
          
          <input class="input-home" type="tel" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}></input>

          <input class="input-home" type="email" placeholder=" Email" value={email} onChange={e => setEmail(e.target.value)}></input>

          <input class="input-home" type="password" placeholder="Senha:" value={senha} onChange={e => setSenha(e.target.value)}></input>

          <input class="input-home" type="date" id="birthday" name="birthday" value={data} onChange={e => setData(e.target.value)}></input>
          
          <button class="input-home" id="Cadastro" onClick={handleSubmit}>Cadastrar-se</button>
        </div>
  
      </div>
      </section>
      </form>
    </>
    
  )
}

export default Cadastro;


