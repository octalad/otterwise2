import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;
console.log(apiURL);

const instance = axios.create({
  baseURL: apiURL,
});
export default instance;
