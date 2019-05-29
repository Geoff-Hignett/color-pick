import React, { Component } from 'react';
import './Tile.css';
import { getRandomColor } from './helpers';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor()
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: this.state.color,
            height: '200px',
            width: '200px'
          }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Tile;
