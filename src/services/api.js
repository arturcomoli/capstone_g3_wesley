import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-workout.herokuapp.com/",
});

export default api;
