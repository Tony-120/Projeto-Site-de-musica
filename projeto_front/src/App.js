import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import CadastroEscola from "./compoent/Cadastro_Escola"
import Login from "./compoent/Login"
import Cadastro from "./compoent/Cadastro"
import Consulta from "./compoent/Consulta"
import RecuperarSenha from "./compoent/RecuperarSenha"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cadastro_Escola from "./compoent/Cadastro_Escola"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          {/* Route é a Rota para que o Site vai quando Clicar */}
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/CadastroEscola' compoent={CadastroEscola} exact>
            <Cadastro_Escola />
          </Route>
          <Route path='/login' compoent={Login} exact>
            <Login />
          </Route>
          <Route path='/cadastro' compoent={Cadastro} exact>
            <Cadastro />
          </Route>
          <Route path='/consulta' compoent={Consulta} exact>
            <Consulta />
          </Route>
          <Route path='/recuperarsenha' compoent={RecuperarSenha} exact>
            <RecuperarSenha />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
