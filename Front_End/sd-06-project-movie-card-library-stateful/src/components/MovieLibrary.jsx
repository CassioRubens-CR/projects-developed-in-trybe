// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handlerChangeSearchText = this.handlerChangeSearchText.bind(this);
    this.handlerChangeBookmarkedOnly = this.handlerChangeBookmarkedOnly.bind(this);
    this.handlerChangeSelectedGenre = this.handlerChangeSelectedGenre.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(addMovie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(addMovie) });
  }

  handlerChangeSearchText(event) {
    this.setState({ searchText: event.target.value }, () => {
      const { movies } = this.props;
      const { searchText } = this.state;
      const filterMovies = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
      this.setState({ movies: filterMovies });
    });
  }

  handlerChangeBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, () => {
      const { movies } = this.props;
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) {
        const favoriteMovies = movies.filter((movie) => movie.bookmarked === true);
        this.setState({ movies: favoriteMovies });
      } else {
        this.setState({ movies: { movies } });
      }
    });
  }

  handlerChangeSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      const { movies } = this.props;
      const { selectedGenre } = this.state;
      if (selectedGenre === '') {
        this.setState({ movies: { movies } });
      } else {
        const movieGenre = movies.filter((movie) => (
          movie.genre === selectedGenre
        ));
        this.setState({ movies: movieGenre });
      }
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handlerChangeSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handlerChangeBookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handlerChangeSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
