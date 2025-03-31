import axios from "axios";

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Cambiado para CRA
});

export default clienteAxios;