import React, { Component } from 'react';
import Tile from './Tile';
import './Tiles.css';

class Tiles extends Component {
  static defaultProps = {
    numBoxes: 18
  };
  render() {
    const tiles = Array.from({ length: this.props.numBoxes }).map(() => (
      <Tile />
    ));
    return <div className="Tiles">{tiles}</div>;
  }
}

export default Tiles;
