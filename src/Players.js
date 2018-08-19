import React, { Component } from 'react';
import Player from './Player';

export class Players extends Component {
  render() {
    return (
      <div>
        {this.props.players.map( (player) => {
          return <Player player={player} key={player.id} />
        })}
      </div>
    );
  }
}

export default Players