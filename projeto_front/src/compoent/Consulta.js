import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Consulta.css";
import EscolaList from "./EscolaList";
import Copyright from "./Copyright";

const Consulta = () => {
  const [escolas, setEscolas] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB80C0rARCy3bPe_rtfWx_4syxUsB-7Nm4",
  });

  useEffect(() => {
    const handleUseLocation = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const location = {
        lat: latitude,
        lng: longitude,
      };
      setCurrentLocation(location);
    };

    // DidMount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleUseLocation,
        (error) => {
          console.log("Erro ao encontrar localização:", error);
        }
      );
    } else {
      console.log("Geolocalização não suportada pelo navegador.");
    }
  }, []);

  useEffect(() => {
    // DidUpdate
    if (currentLocation) {
      // Aqui faço função de procurar escolas próximas
      console.log("Localização atual:", currentLocation);
    }
  }, [currentLocation]);

  const center = currentLocation || {
    lat: -23.5505, // latitude de SPzada
    lng: -46.6333, // longitude de SPzada
  };

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

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <h2 className="mt-1 mb-0 pb-0">Buscar Escolas<hr /></h2>
          <div className="container">
            <div className="form-group text-center">
              <button className="btn btn-dark col-md-6" onClick={handleUseLocation}>Usar minha localização atual</button>
            </div>
          </div>
          
          <div>
            <EscolaList escolas={escolas} userLocation={currentLocation} />
          </div>
        </div>
    
        <div className="col-md-6">
          <div className="map">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "640px" }}
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
      <Copyright />
    </div>
  );
};

export default Consulta;
