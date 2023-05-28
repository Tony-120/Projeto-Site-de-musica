import React from "react"
import Copyright from "./Copyright"

const RecuperarSenha = () => {
  return (
    <>          
    <div class="container-login pt-5">
        <div class="login-form-bg h-100">
            <div class="container h-100">
                <div class="row justify-content-center h-100">
                    <div class="col-xl-6">
                        <div class="form-input-content">
                            <div class="card login-form mb-0" id="card-login">
                                <div class="card-body pt-5">                                    
                                    <h3 class="text-center">Recuperar Senha</h3>            
                                    <form class="mt-5 mb-5 login-input">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email" required></input>
                                        </div><br></br>
                                        
                                        <a href="/home"><button class="w-100 btn btn-dark" id="btn">Recuperar Senha</button></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Copyright />
    </div>
    </>
  )
}
export default RecuperarSenha