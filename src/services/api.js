import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sarilioapi.herokuapp.com/',
});

export default api;
