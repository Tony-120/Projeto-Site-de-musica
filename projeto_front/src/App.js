import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import Sobre from "./compoent/Sobre"
import Login from "./compoent/Login"
import Cadastro from "./compoent/Cadastro"
import Consulta from "./compoent/Consulta"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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
          <Route path='/sobre' compoent={Sobre} exact>
            <Sobre />
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
        </Switch>
      </Router>
    </>
  )
}

export default App
