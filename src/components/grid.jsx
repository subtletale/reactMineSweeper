import React, { Component } from 'react';
import GridRow from './grid-row'

class Grid extends Component {
  constructor(props) {
    super(props)
  }
  render() {

      let rows = this.props.board.map((row, i) => {
        return <GridRow key={i} rowKey={i} row={row} onCheckSquare={this.props.onCheckSquare} gameStatus={this.props.gameStatus}/>
      })

    return (
        <div className="gridDiv">
          {rows}
        </div>
    )
  }
}

export default Grid;
