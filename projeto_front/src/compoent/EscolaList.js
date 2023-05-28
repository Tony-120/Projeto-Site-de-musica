import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";

const EscolaList = () => {
  const [escolas, setEscolas] = useState([]);
  

  useEffect(() => {
    // Função para buscar as escolas
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/escola');
        const data = await response.json();
        setEscolas(data);

      } catch (error) {
        console.error("Erro ao buscar as escolas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
  <div className="row">
    <div className="text-justify"> {/* Adicionado a classe text-justify */}
      <div className="escolas-list">
        <h2>Lista de Escolas</h2>
        <ul className="text-left"> {/* Adicionada a classe text-left */}
          {escolas.map((escola, index) => (
            <li key={index}>
              <h6>Nome:</h6> {escola.razaosocial}<br />
              <h6>Endereço:</h6> {escola.endereco}<br />
              <h6>CEP:</h6> {escola.cep}<br/>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

  );
};

export default EscolaList;
