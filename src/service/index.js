import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  responseType: "json",
});

const cancelSource = axios.CancelToken.source();

export { axiosBase, cancelSource };
