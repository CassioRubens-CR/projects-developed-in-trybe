import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movieType from '../Types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(movieType).isRequired,
  ).isRequired,
};

export default MovieList;
