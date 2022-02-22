import axios from "axios";

const api = axios.create({
    baseURL: 'https://inventory-maneger.herokuapp.com'
});

export default api;