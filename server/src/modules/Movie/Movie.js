const { api } = require("../../api");

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.release_date = movie.release_date;
    this.poster_path = movie.poster_path;
  }

  async getMovie() {
    const {
      images: { base_url = "", poster_sizes = [] },
    } = await api.getConfiguration();

    return {
      id: this.id,
      title: this.title,
      releaseDate: this.release_date,
      posterPath: `${base_url}${poster_sizes[2]}${this.poster_path}`,
    };
  }
}

module.exports = {
  Movie,
};
