import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const mode = import.meta.env.MODE;
const baseURL = mode === 'development' ? 'http://localhost:5000' : 'https://database-coral-mu.vercel.app';

export const $api = axios.create({
  baseURL,
})

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
})