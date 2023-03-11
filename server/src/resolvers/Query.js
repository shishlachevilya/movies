const { Movies } = require("../modules/Movies/Movies");
const { api } = require("../api");

async function movies() {
  const data = await api.getPopularMovies();

  return new Movies(data);
}

module.exports = {
  movies,
};
