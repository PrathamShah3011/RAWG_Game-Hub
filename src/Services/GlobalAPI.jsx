import axios from "axios";

const key = "a6b356083f1448079ef3ac5fb0306866";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);

export default {
  getGenreList,
  getAllGames,
};
