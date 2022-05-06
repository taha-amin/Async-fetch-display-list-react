import React from 'react';
import Players from './PlayerItem';

export default function PlayerList({ players }) {
  return (
    <div className="player-list">
      {players.map((player) => (
        <Players key={player.name} player={player} />
      ))}
    </div>
  );
}
