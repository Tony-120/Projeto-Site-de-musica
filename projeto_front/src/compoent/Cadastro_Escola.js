import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { eventEmitter } from './config/db';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connectToDatabase, eventEmitter } from '../config/db';
import Copyright from './Copyright';

const Cadastro_Escola = () => {
  const [db, setDb] = useState(null);
  useEffect(() => {
    const connectDB = async () => {
      eventEmitter.on('connected', (database) => {
        setDb(database);
      });
      await connectToDatabase();
    };

    connectDB();
  }, []);

  const [razaosocial, setrazaosocial] = useState('');
  const [cnpj, setcnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCEP] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await db.collection('escolas').insertOne({
        razaosocial,
        cnpj,
        endereco,
        cep,
        telefone,
        email,
        senha,
      });

      console.log('Escola cadastrada com sucesso!');
      // Você pode adicionar aqui uma lógica para redirecionar ou exibir uma mensagem de sucesso.

    } catch (error) {
      console.error('Erro ao cadastrar escola:', error);
      // Você pode adicionar aqui uma lógica para exibir uma mensagem de erro.
    }
  };

  return (
    <>
      <form className="col-md-12" onSubmit={handleSubmit}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <h2 class="mt-1 mb-5 pb-1">Cadastro de Escolas</h2>
                    <hr></hr>
                  </div>
                  <form>
                    <div class="form-row">
                      <div class="row">
                        <div class="form-group col-md-6 pb-4">
                          <label>Razão Social</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inserir-razaosocial"
                            placeholder="Razão social"
                            value={razaosocial}
                            onChange={(e) => setrazaosocial(e.target.value)}
                          ></input>
                        </div>

                        <div class="form-group col-md-6 pb-4">
                          <label>CNPJ </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inserir-cnpj"
                            placeholder="Digite o Cnpj"
                            value={cnpj}
                            onChange={(e) => setcnpj(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="row">
                        <div class="form-group col-md-6 pb-4">
                          <label>Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inserir-email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </div>
                        <div class="form-group col-md-6 pb-4">
                          <label>Senha</label>
                          <input
                            type="password"
                            class="form-control"
                            id="inserir-senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="row">
                        <div class="form-group col-md-6 pb-4">
                          <label>Telefone</label>
                          <input
                            type="tel"
                            class="form-control"
                            id="inserir-telefone"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                          ></input>
                        </div>
                        <div class="form-group col-md-6 pb-4">
                          <label>Endereço</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inserir-endereco"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="row">
                        <div class="form-group col-md-4 pb-4">
                          <label>Cidade</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inserir-cidade"
                          ></input>
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
                          <input
                            type="text"
                            class="form-control"
                            id="inserir-cep"
                            value={cep}
                            onChange={(e) => setCEP(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn btn-dark col-md-6 "
                        onClick={handleSubmit}
                      >
                        Cadastrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </form>
    </>
  );
};

export default Cadastro_Escola;
