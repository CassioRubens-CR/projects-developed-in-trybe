import PropTypes from 'prop-types';

const movie = PropTypes.exact({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
}).isRequired;

export default movie;
