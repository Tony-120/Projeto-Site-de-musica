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
    googleMapsApiKey: "AIzaSyCK443NEI7jGaaAyLwQ5L_rAO6mHgGdHWk", // Substitua pelo seu próprio API key
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/escola");
      const data = await response.json();

      const promises = data.map(async (escola) => {
        const { endereco } = escola;
        const geoData = await getGeocodeData(endereco); // Obtém as coordenadas a partir do endereço

        return {
          ...escola,
          latitude: geoData.latitude,
          longitude: geoData.longitude,
        };
      });

      const escolasComCoordenadas = await Promise.all(promises);
      setEscolas(escolasComCoordenadas);
    } catch (error) {
      console.error("Erro ao buscar as escolas:", error);
    }
  };

  const getGeocodeData = async (address) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=AIzaSyCK443NEI7jGaaAyLwQ5L_rAO6mHgGdHWk` // Substitua pelo seu próprio API key
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return {
        latitude: lat,
        longitude: lng,
      };
    } else {
      throw new Error("Falha ao obter coordenadas para o endereço: " + address);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              
            
              {escolas.map((escola, index) => {
                if (isNaN(escola.latitude) || isNaN(escola.longitude)) {
                  return null; // Pula esta iteração se as coordenadas não forem válidas
                }
            
                return (
                  <Marker
                    key={index}
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
                );
              })}
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
