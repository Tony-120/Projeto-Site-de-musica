import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Consulta.css"



const Consulta = () => {
    const [escolas, setEscolas] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCcJ1XkdQqV1t3Jf7JScKIRQgGtToWarZo"
      })

      const position = {
        lat: -23.5522189,
        lng: -46.7500382,
    };    

    return (
        <div className="map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "50%", height: "50%" }}
              center={position}
              zoom={15}
            >
              {escolas.map((escola) => (
                <Marker
                  key={escola.contador}
                  position={{
                    lat: parseFloat(escola.latitude), // Substitua pela propriedade correspondente à latitude na escola
                    lng: parseFloat(escola.longitude), // Substitua pela propriedade correspondente à longitude na escola
                  }}
                  options={{
                    label: {
                      text: escola.razaosocial, // Substitua pela propriedade correspondente à razão social na escola
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
      );
}; 
export default Consulta

//a gente tem q fazer separado por pasta depois, tipo pasta consulta(coisas de consulta)
