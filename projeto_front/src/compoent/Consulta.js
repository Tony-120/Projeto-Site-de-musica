import React, { useState, useEffect } from 'react';

const Consulta = () => {
  const [map, setMap] = useState(null);

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          showMap(latitude, longitude);
        },
        error => {
          console.log('Erro ao obter a localização:', error);
        }
      );
    } else {
      console.log('Geolocalização não suportada pelo navegador.');
    }
  };

  const showMap = (latitude, longitude) => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB80C0rARCy3bPe_rtfWx_4syxUsB-7Nm4&callback=initializeMap`;
    window.initializeMap = () => initializeMap(latitude, longitude);
    document.body.appendChild(googleMapsScript);
  };

  const initializeMap = (latitude, longitude) => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 12
    };

    const mapElement = document.getElementById('map');
    const newMap = new window.google.maps.Map(mapElement, mapOptions);

    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: newMap
    });

    setMap(newMap);
  };

  return (
    <div>
      <button onClick={handleUseLocation} className="btn btn-primary">
        Usar minha localização atual
      </button>
      <div id="map" style={{ height: '400px', marginTop: '20px' }}></div>
    </div>
  );
};

export default Consulta;
