import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EscolaList = ({ escolas, userLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterEscolas = (escolas) => {
    return escolas.filter((escola) =>
      escola.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const calculateDistance = (escolaLocation) => {
    const lat1 = userLocation.lat;
    const lng1 = userLocation.lng;
    const lat2 = escolaLocation.lat;
    const lng2 = escolaLocation.lng;

    // Fórmula para cálculo de distância entre dois pontos geográficos (coordenadas)
    const R = 6371; // Raio da Terra em km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance.toFixed(2); // Retorna a distância arredondada com 2 casas decimais
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEscolas = filterEscolas(escolas);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Pesquisar escola"
            value={searchTerm}
            onChange={handleSearch}
          />

          {filteredEscolas.length > 0 ? (
            <ul className="list-group">
              {filteredEscolas.map((escola) => (
                <li className="list-group-item" key={escola.id}>
                  <h5>{escola.nome}</h5>
                  <p>{escola.endereco}</p>
                  <p>Distância do usuário: {calculateDistance(escola.localizacao)} km</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EscolaList;
