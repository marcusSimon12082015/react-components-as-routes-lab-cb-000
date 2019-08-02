import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor,i) => (
          <div>
          <p>Name: {actor.name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Actors;
