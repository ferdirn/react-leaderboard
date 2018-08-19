import React, { Component } from 'react';

export class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: this.props.player.score
    }

    this.decScore = this.decScore.bind(this)
    this.incScore = this.incScore.bind(this)
  }
  decScore(event) {
    this.setState({
      score: this.state.score - 10
    })
  }
  incScore(event) {
    this.setState({
      score: this.state.score + 10
    })
  }
  render() {
    const styles = {
      player: {
        display: 'flex',
        padding: 10
      },
      name: {
        flex: '1'
      },
      playerScore: {
        width: 200
      },
      score: {
        padding: 20
      },
      button: {
        padding: 10
      }
    }
    return (
      <div style={styles.player}>
        <div style={styles.name}>
          {this.props.player.name}
        </div>
        <div style={styles.playerScore}>
          <div>
            <button onClick={this.decScore} style={styles.button}>-</button>
            <span style={styles.score}>{this.state.score}</span>
            <button onClick={this.incScore} style={styles.button}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player