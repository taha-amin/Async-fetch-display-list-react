import React from 'react';

export default function Artists({ artist }) {
  return (
    <div className="artist">
      <p>Artist Name: {artist.name}</p>
      <p>Genre of Music: {artist.genre}</p>
      <p>{artist.albums} albums</p>
    </div>
  );
}
