import React, { Component } from 'react';
import GridSquare from './grid-square'

class GridRow extends Component {
  render() {

    let squares = this.props.row.map((square, i) => {
      return (
        <GridSquare key={i} rowKey={this.props.rowKey} squareKey={i} square={square} onCheckSquare={this.props.onCheckSquare} gameStatus={this.props.gameStatus}/>
      )
    })

    return (
        <div className="gridRow">
          {squares}
        </div>
    )
  }
}

export default GridRow;