import React, { useState } from "react"

import "./Cadastro.css"

const Cadastro = () => {

  const [formData,setformData] = useState ({
    nome: '',
    cpf: '',
    endereco: '',
    cep: '',
    telefone: '',
    email: '',
    senha: '',
    data: ''
  })

  const handleFormEdit = (event, nome) => {
    setformData({...formData,[nome]: event.target.value
    
    })

  }

  const handleForm= async(event)=>{
    try {
      event.preventDefault()
      const response = await fetch(`/aluno`,
      {

        method: 'POST',
        body: JSON.stringify(formData)
      
      })

      const json = await response.json()
      console.log(response.status)
      console.log(json)
      
    }catch (err) {
    console.log(formData)}
    

  }

  return (
    <>
    <section className='hero'>
    <div class="grid-container">   
      
      <div class="titulo">
        <h1 class="titulo-home">Criar Nova Conta</h1>
        <h3 class="label-subtitulo">Já possui cadastro?</h3>  
        <a href="/">Login</a><br></br>
      </div>
      
        <div class="parte1">          
          <input class="input-home" type="text" placeholder=" Nome" required value={formData.nome} onChange={(e)=>{handleFormEdit(e,'nome')}}></input>

          <input class="input-home" type="text" placeholder=" CPF" required value={formData.cpf}></input>

          <input class="input-home" type="text" placeholder=" Endereço" required value={formData.endereco}></input>

          <input class="input-home" type="text" placeholder=" CEP" required value={formData.cep}></input>
          
          <input class="input-home" type="tel" placeholder="Telefone: " required value={formData.telefone}></input>

          <input class="input-home" type="email" placeholder=" Email" required value={formData.email}></input>

          <input class="input-home" type="password" placeholder="Senha:" required value={formData.senha}></input>

          <input class="input-home" type="date" id="birthday" name="birthday" required value={formData.data}></input>
          
          <button class="input-home" type="submit" id="Cadastro">Cadastrar-se</button>
        </div>
  
      </div>
      </section>

      {/* COMO O SECTION FUNCIONA DIVIDINDO A PAGINA */}
      {/* <section className='hero'>
        <h1>Pagina de Cadastro</h1>
      </section>
      <section className='hero'>
        <h1>Cadastro meio</h1>
      </section>
      <section className='hero'>
        <h1>Pagina FIM</h1>
      </section> */}

    </>
  )
}

export default Cadastro()
 


