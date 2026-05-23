import axios from 'axios'

const API_ACCESS_TOKEN = import.meta.env.REACT_APP_READ_ACCESS_API;

export const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});