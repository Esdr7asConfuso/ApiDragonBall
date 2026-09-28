import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dragonball-api.com/api',
  timeout: 10000, // Dá um tempo de espera de 10 segundos
});