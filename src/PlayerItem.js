import React from 'react';

export default function Players({ player }) {
  return (
    <div className="player">
      <p>Player: {player.name}</p>
      <p>{player.age} years old</p>
      <p>Sport: {player.sport}</p>
      <p>Players for: {player.name}</p>
    </div>
  );
}
