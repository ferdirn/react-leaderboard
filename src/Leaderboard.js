import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    const PLAYERS = [
      {id: 1, name: "Brendan Eich", score: 25},
      {id: 2, name: "Chris Lattner", score: 10},
      {id: 3, name: "Jose Valim", score: 30}
    ]
    this.state = {
      players: PLAYERS
    }

    this.onAddPlayer = this.onAddPlayer.bind(this)
  }
  onAddPlayer(name) {
    let new_players = this.state.players
    new_players.push({id: new_players.length+1,name: name, score: 10})
    this.setState({
      players: new_players
    })
  }
  render() {
    const styles = {
      container: {
        padding: 60
      }
    }

    return (
      <div style={styles.container}>
        <h1>Leaderboard</h1>
        <Players players={this.state.players} />
        <AddPlayer onAddPlayer={this.onAddPlayer} />
      </div>
    )
  }
}

export default Leaderboard