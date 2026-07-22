import axios from "axios";

const api = axios.create({

  baseURL:
    import.meta.env.VITE_API_URL ??
    "https://bioapi.bydeka.net",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }

});

console.log("🌍 API =", api.defaults.baseURL);

export default api;
