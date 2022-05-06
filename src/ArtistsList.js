import React from 'react';
import Artists from './ArtistItem';

export default function ArtistList({ artists }) {
  return (
    <div className="artist-list">
      {artists.map((artist) => (
        <Artists key={artist.name} artist={artist} />
      ))}
    </div>
  );
}
