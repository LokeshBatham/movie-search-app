import React from 'react';

const MovieList = ({ movies, selectMovie }) => (
  <div className="row movielist">
    {movies.map((movie) => (
      <div className=" col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.imdbID}>
        <div className="card" onClick={() => selectMovie(movie)}>
          <img src={movie.Poster} className="card-img-top movimg" alt={movie.Title} />
          <div className="card-body">
            <h5 className="card-title two-lines" title={movie.Title}>{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MovieList;
