const { Movies } = require("../modules/Movies/Movies");
const { api } = require("../api");

async function popularMovies(obj, args) {
  const data = await api.getPopularMovies(args.page);

  return new Movies(data);
}

module.exports = {
  popularMovies,
};
