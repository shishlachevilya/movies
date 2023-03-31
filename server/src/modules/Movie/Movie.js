const { api } = require("../../api");

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.release_date = movie.release_date;
    this.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    this.status = movie.status;
    this.overview = movie.overview;
    this.genreIds = movie.genre_ids;
  }

  async getMovie() {
    // const {
    //   images: { base_url = "", poster_sizes = [] },
    // } = await api.getConfiguration();
    //
    // console.log(123, base_url);

    return {
      id: this.id,
      title: this.title,
      releaseDate: this.release_date,
      posterPath: this.poster_path,
      overview: this.overview,
      genreIds: this.genreIds,
    };
  }
}

module.exports = {
  Movie,
};
