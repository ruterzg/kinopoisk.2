import axios from "axios";

const API_KEY = "93c3b37a-9271-48e2-8f0c-c0f7e463e330";

const API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
});

API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;
