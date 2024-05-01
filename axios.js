import axios from 'axios';

//se entrega la url de la api

axios.get("https://rickandmortyapi.com/api/character/1").then(data => {
    const name = data.data.name;
    console.log(name);
});