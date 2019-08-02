import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,i) => {
        <div key={i} className="actor">
          <p>Name: {actor.name}</p>
          <p>Movies:</p>
          <ul>
          </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;
