import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid'
import axios from 'axios'

const baseURL = 'https://minesweeper-api.herokuapp.com/games/'

class App extends Component {
  state = {
    currentGameId: 0,
    currentBoard: [],
    numberOfMines: 0,
    currentDifficulty: 0,
    gameStatus: null
  }

  getURL = (action, difficulty, id, row, col) => {
    switch (action) {
      case 'newGame': return baseURL + `?difficulty=${id}`; break
      case 'check': return baseURL + `${id}/check?row=${row}&col=${col}`; break
      case 'flag': return baseURL + `${id}/flag?row=${row}&col=${col}`; break
      case 'existingGame': return baseURL + `${id}`
    }
  }

  _updateGameState = (id, board, mines, dif, status) => {
    this.setState({
      currentGameId: id,
      currentBoard: board,
      numberOfMines: mines,
      currentDifficulty: dif,
      gameStatus: status
    })
  }

  _startGame = (difficulty) => {
    axios.post(this.getURL('newGame', difficulty, null, null, null))
      .then(res => {
        let data = res.data
        this._updateGameState(data.id, data.board, data.mines, data.difficulty, data.state)
      })
  }

  _checkSquare = (row, col) => {
    axios.post(this.getURL('check', null, this.state.currentGameId, row, col))
      .then(res => {
        let data = res.data
        this._updateGameState(data.id, data.board, data.mines, data.difficulty, data.state)
      })
  }

  _flagSquare = () => {

  }

  componentWillMount() {
    // this._startGame(0)
  }
  
  render() {

    let grid = () => {
      return (
        <Grid board={this.state.currentBoard} onCheckSquare={this._checkSquare} gameStatus={this.state.gameStatus}/>
      )
    }

    let button = () => {
      return (
        <button className="startButton" onClick={this._startGame} >New Game</button>
      )
    }

    let buttonOrGrid = () => {
      let test = this.state.gameStatus == null ? button() : grid()
      return test
    }

    let resetButton = () => {
      if (this.state.gameStatus === 'won' || this.state.gameStatus === 'lost') {
        return button()
      }
    }

    return (
      <main className="wrapper">
        <h1 className="header">
          This is my Header!
        </h1>
        <div className="container">
          {buttonOrGrid()}
          <div className="bracket">
            <div className="bracketOverlay"></div>
          </div>
        </div>
        {resetButton()}
      </main>
    );
  }
}

export default App;
