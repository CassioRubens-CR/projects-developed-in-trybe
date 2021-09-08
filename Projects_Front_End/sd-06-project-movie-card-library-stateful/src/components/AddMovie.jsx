// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.handlerChangeSubtitle = this.handlerChangeSubtitle.bind(this);

    this.inputTitle = this.inputTitle.bind(this);
    this.handlerChangeTitle = this.handlerChangeTitle.bind(this);

    this.inputImagePath = this.inputImagePath.bind(this);
    this.handlerChangeImagePath = this.handlerChangeImagePath.bind(this);

    this.inputStoryLine = this.inputStoryLine.bind(this);
    this.handlerChangeStoryLine = this.handlerChangeStoryLine.bind(this);

    this.inputRating = this.inputRating.bind(this);
    this.handlerChangeRating = this.handlerChangeRatinge.bind(this);

    this.inputGenre = this.inputGenre.bind(this);
    this.handlerChangeGenre = this.handlerChangeGenre.bind(this);

    this.buttonAddMovie = this.buttonAddMovie.bind(this);
  }

  handlerChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }
  // handlerChangeSubtitle = (event) => {
  //   this.setState({
  //     subtitle: event.target.value
  //   });
  // }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        <p>Subtítulo</p>
        <input
          onChange={this.handlerChangeSubtitle}
          id="subtitle"
          name="subtitle"
          value={subtitle}
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  handlerChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  // handlerChangeTitle = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        <p>Título</p>
        <input
          data-testid="title-input"
          value={title}
          type="text"
          name="title"
          onChange={this.handlerChangeTitle}
        />
      </label>
    );
  }

  handlerChangeImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }
  // handlerChangeImagePath = (event) => {
  //   this.setState({
  //     imagePath: event.target.value
  //   });
  // }

  inputImagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        <p>Imagem</p>
        <input
          data-testid="image-input"
          value={imagePath}
          type="text"
          name="image"
          onChange={this.handlerChangeImagePath}
        />
      </label>
    );
  }

  handlerChangeStoryLine(event) {
    this.setState({ storyline: event.target.value });
  }
  // handlerChangeStoryLine = (event) => {
  //   this.setState({
  //     storyline: event.target.value
  //   });
  // }

  inputStoryLine() {
    const { storyline } = this.state;
    return (
      <textarea
        data-testid="storyline-input"
        value={storyline}
        type="text"
        name="storyline"
        onChange={this.handlerChangeStoryLine}
      />
    );
  }

  handlerChangeRatinge(event) {
    this.setState({ rating: event.target.value });
  }
  // handlerChangeRatinge = (event) => {
  //   this.setState({
  //     rating: event.target.value
  //   });
  // }

  inputRating() {
    const { rating } = this.state;
    return (
      <textarea
        data-testid="rating-input"
        value={rating}
        type="text"
        name="rating"
        onChange={this.handlerChangeRatinge}
      />
    );
  }

  handlerChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }
  // handlerChangeGenre = (event) => {
  //   this.setState({
  //     genre: event.target.value
  //   });
  // }

  inputGenre() {
    const { genre } = this.state;
    return (
      <select
        data-testid="genre-input"
        value={genre}
        type="text"
        name="genre"
        onChange={this.handlerChangeGenre}
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  buttonAddMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" className="add-movie">
          {this.inputTitle()}
          {this.inputSubtitle()}
          {this.inputImagePath()}
          <label data-testid="storyline-input-label" htmlFor="storyline">
            <p>Sinopse</p>
            {this.inputStoryLine()}
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            <p>Avaliação</p>
            {this.inputRating()}
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            <p>Gênero</p>
            {this.inputGenre()}
          </label>
          <button type="button" onClick={this.buttonAddMovie} data-testid="send-button">
            <p>Adicionar filme</p>
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
