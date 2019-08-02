import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie,i) => {
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
        }}
    </div>
  );
};

export default Movies;
