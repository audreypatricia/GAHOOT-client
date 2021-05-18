import React from 'react';

import './playerlist.styles.css';

export const PlayerList = props => (
  <div className='player-list'>
    {props.players.map(player => (
      <Player key ={player.id} player={player} />
    ))}
  </div>
);

const Player = (props) => (
  <div className='player-container'>

    <h2> {props.player.username} </h2>

  </div>
);
