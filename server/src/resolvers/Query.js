const { Movies, Movie } = require("../modules");
const { api } = require("../api");
const axios = require("axios");

async function popularMovies(parent, { page, lang }) {
  const data = await api.getPopularMovies(page, lang);

  return new Movies(data);
}

async function moviesByIds(parent, { ids, lang }) {
  console.log("server lang", lang);
  const requests = ids.map((id) => api.getMoviesById(id, lang));
  const response = await axios.all(requests);

  return response.map(({ data }) => new Movie(data).getMovie());
}

module.exports = {
  popularMovies,
  moviesByIds,
};
