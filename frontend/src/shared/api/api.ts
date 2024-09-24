import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const mode = import.meta.env.MODE;
const baseURL = mode === 'development' ? 'http://localhost:5000' : 'https://production.ru';

export const $api = axios.create({
  baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
})