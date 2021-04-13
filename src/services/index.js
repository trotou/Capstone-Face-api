// axios
import axios from 'axios';

// ---------------------------
const API = axios.create({
    baseURL: 'https://capstone-json-server.herokuapp.com'
});

export default API;

export const bearer = (token) => ({ headers: { Authorization: `Bearer ${token}` } });
