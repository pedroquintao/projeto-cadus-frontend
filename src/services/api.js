import axios from 'axios'

const apiUrl = 'http://localhost:8080';

const api = axios.create({ baseUrl: apiUrl });

export default api;