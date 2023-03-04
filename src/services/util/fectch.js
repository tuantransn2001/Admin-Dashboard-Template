import axios from "axios";

const fetchApi = axios.create({
  baseURL: "http://localhost:5000/mhk-api/v1/",
});

export { fetchApi };
