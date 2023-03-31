const { Movies, Movie } = require("../modules");
const { api } = require("../api");
const axios = require("axios");

async function popularMovies(parent, args) {
  const data = await api.getPopularMovies(args.page);

  return new Movies(data);
}

async function moviesByIds(parent, { ids }) {
  const requests = ids.map((id) => api.getMoviesById(id));
  const response = await axios.all(requests);

  return response.map(({ data }) => new Movie(data).getMovie());
}

module.exports = {
  popularMovies,
  moviesByIds,
};
