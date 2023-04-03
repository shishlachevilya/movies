const axios = require("axios");

const API_KEY = "c78b26e8a0a8f29dd4f0a6aeed423da3";
const configurationUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

const api = {
  getConfiguration: async function () {
    const response = await axios.get(configurationUrl);

    return await response.data;
  },

  getPopularMovies: async function (page, lang) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
    );

    return await response.data;
  },

  getMoviesById: async function (id, lang) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${lang}`
    );
  },
};

module.exports = {
  api,
};
