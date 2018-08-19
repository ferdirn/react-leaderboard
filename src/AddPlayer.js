import React, { Component } from 'react';

export class AddPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onAddPlayer = this.onAddPlayer.bind(this)
  }
  onInputChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  onAddPlayer(event) {
    this.props.onAddPlayer(this.state.name)
    this.setState({
      name: ""
    })
  }
  render() {
    const styles = {
      container: {
        padding: 10
      },
      input: {
        flex: 1,
        paddingRight: 26,
        width: "45%",
        height: 27
      },
      button: {
        float: "right",
        marginRight: 80,
        width: 120,
        padding: 10
      }
    }
    return (
      <div style={styles.container}>
        <input onChange={this.onInputChange} type="text" placeholder="Put your fav developer's name here ..." value={this.state.name} style={styles.input} />
        <button onClick={this.onAddPlayer} style={styles.button}>Add Player</button>
      </div>
    );
  }
}

export default AddPlayer