import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:6000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
