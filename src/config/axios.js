import axios from "axios";

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Cambiado para CRA
    headers: {
       'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
    },
    withCredentials: true, // Permitir cookies de terceros

});

export default clienteAxios;