import React, { Component } from 'react';

class GridSquare extends Component {

  _check = () => {
    this.props.onCheckSquare(this.props.rowKey, this.props.squareKey)
  }

  render() {

    let click = () => {
      // left right check here
      return this.props.gameStatus === 'won' || this.props.gameStatus === 'lost' ? null : this._check()
    }

    let _handleContent = (square, status) => {
      switch (square) {
        case ' ': return ''; break
        case '_': return ''; break
        case 'F': return 'F'; break
        case '*': return (status === 'won' || status === 'lost') ? '*' : ''; break
        case '@': return (status === 'won' || status === 'lost') ? '@' : ''; break
        default: return square; break
      }
    }

    let _handleStyling = (square) => {

    }

    return (
        <div className="square" onClick={click}>
          {_handleContent(this.props.square, this.props.gameStatus)}
        </div>
    )
  }
}

export default GridSquare;