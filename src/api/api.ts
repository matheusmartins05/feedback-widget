import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:3333/',
    headers: {'X-Custom-Header': 'foobar'}
  });