// MovieList.js
import React from 'react';
import Card from '../card/Card';
import './movieList.css';

export default function MovieList({ movieData }) {
  return (
    <div className="container">
      {movieData.length === 0 ? (
        <p className="not_found"></p>
      ) : (
        movieData.map((res, poster) => {
          return <Card info={res} key={poster} />;
        })
      )}
    </div>
  );
}
