import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import "./reset.css"

function Movie({id, year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <div className="movie-img-wrapper">
        <img src={poster} className="movie-img" alt={title} title={title}/>
      </div>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">{genres.map((genre, index) => (
          <li key={index} className="genres__genre">{genre}</li>
        ))}
        </ul>
        <div className="movie__summary">{summary.slice(0, 180)}...</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;