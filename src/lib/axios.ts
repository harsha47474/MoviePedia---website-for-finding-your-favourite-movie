import axios from 'axios'


const API_ACCESS_TOKEN = import.meta.env.VITE_READ_ACCESS_API;
const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
});