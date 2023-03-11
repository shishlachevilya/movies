const axios = require("axios");

const API_KEY = "c78b26e8a0a8f29dd4f0a6aeed423da3";
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const configurationUrl = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

const api = {
  getConfiguration: async function () {
    const response = await axios.get(configurationUrl);

    return await response.data;
  },

  getPopularMovies: async function () {
    const response = await axios.get(popularMoviesUrl);

    return await response.data;
  },
};

module.exports = {
  api,
};
