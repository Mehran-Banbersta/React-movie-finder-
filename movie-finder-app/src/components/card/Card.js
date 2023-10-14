import React from 'react';
import './card.css';

export default function Card(movie) {
  let image_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="movie_container">
      <img
        src={image_path + movie.info.poster_path}
        alt=""
        className="poster"
      />
      <div className="movie_detail">
        <div className="box">
          <h4 className="title">{movie.info.title}</h4>
          <p className="rating">{movie.info.vote_average}</p>
        </div>
        <div className="release_info">
          <h5 className="language">Language: {movie.info.original_language}</h5>
          <h6 className="info"> MovieRDate: {movie.info.release_date}</h6>
          <button className="more_info_btn">Overview</button>
        </div>

        <div className="overview">
          <h1>overview</h1>
          {movie.info.overview}
        </div>
      </div>
    </div>
  );
}
