const express = require ('express')
const app = express()
const axios = require('axios')
app.use(express.json())

const ExibirCep = {}

  //api do maps
navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`;
  fetch(geocodingUrl)
    .then(response => response.json())
    .then(data => {
    
      const userZipcode = data.results[0].address_components.find(component => component.types.includes('postal_code')).long_name;

      const schoolZipcode = '12345-678'; // tem q substituir pelo cep da escola
      const zipcodeUrl = `https://viacep.com.br/ws/${schoolZipcode}/json/`;
      fetch(zipcodeUrl)
        .then(response => response.json())
        .then(data => {
          
          console.log(`Escola encontrada: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
        })
        .catch(error => {
          console.error('Erro ao buscar o CEP da escola:', error);
        });
    })
    .catch(error => {
      console.error('Erro ao obter o endereço do usuário:', error);
    });
}, function(error) {
  console.error('Erro ao obter a localização do usuário:', error);
});




app.get('/escola', (req, res) => {
  res.status(200).send(ExibirCep)  
})



app.listen(5000, () => {
    console.log('Consulta Escola. Porta 5000 ');
  });

