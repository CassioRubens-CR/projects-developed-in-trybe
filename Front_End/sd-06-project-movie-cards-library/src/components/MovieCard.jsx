import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movieType from '../Types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <section className="movie-card">
        <img className="movie-card-image" src={movie.imagePath} alt={movie.title} />
        <h4 className="movie-card-title">{movie.title}</h4>
        <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
        <p className="movie-card-storyline">{movie.storyline}</p>
        <Rating className="movie-card-rating" rating={movie.rating} />
      </section>
    );
  }
}

MovieCard.propTypes = PropTypes.shape(movieType).isRequired;

export default MovieCard;
