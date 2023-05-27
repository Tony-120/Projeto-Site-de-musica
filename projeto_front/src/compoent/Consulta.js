import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Consulta.css";
import EscolaList from "./EscolaList";

const Consulta = () => {
  const [escolas, setEscolas] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB80C0rARCy3bPe_rtfWx_4syxUsB-7Nm4",
  });

  useEffect(() => {
    if (currentLocation) {
      // aqui faço a função de procurar escolas próximas
      console.log("Localização atual:", currentLocation);
    }
  }, [currentLocation]);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = {
            lat: latitude,
            lng: longitude,
          };
          setCurrentLocation(location);
        },
        (error) => {
          console.log("Erro ao encontrar localização:", error);
        }
      );
    } else {
      console.log("Geolocalização não suportada pelo navegador.");
    }
  };

  // const position = currentLocation || {
  //   lat: -83.5522189,
  //   lng: -46.7500382,
  // };

  const center = currentLocation || {
    lat: -23.5505, // latitude de São Paulo, por exemplo
    lng: -115.6333, // longitude de São Paulo, por exemplo
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <h2 className="mt-1 mb-5 pb-1">Buscar Escolas</h2>
        
          <div className="btn-group">
            <button
              className="btn btn-primary btn-block"
              onClick={handleLocationClick}
            >
              Usar minha localização atual
            </button>
          </div>

          <div className="container">
            <div className="form-group">
              <label htmlFor="inputField">Buscar por bairro ou cidade</label>
              <input type="text" className="form-control" id="inputField" />
            </div>
          </div>

          <hr />

          <EscolaList escolas={escolas} userLocation={currentLocation} />
        </div>

        <div className="col-md-6">
          <div className="map">
            {isLoaded ? (
              <GoogleMap
              mapContainerStyle={{ width: "127%", height: "640px" }}
              center={center}
              zoom={15}
              >
                {currentLocation && (
                  <Marker
                  position={currentLocation}
                    options={{
                      icon: {
                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      },
                    }}
                  />
                )}

                {escolas.map((escola) => (
                  <Marker
                    key={escola.contador}
                    position={{
                      lat: parseFloat(escola.latitude),
                      lng: parseFloat(escola.longitude),
                    }}
                    options={{
                      label: {
                        text: escola.razaosocial,
                        className: "map-marker",
                      },
                    }}
                  />
                ))}
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
