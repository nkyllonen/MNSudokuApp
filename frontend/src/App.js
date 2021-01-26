import React, { Component } from 'react'
import Board from './Board'
import SidePanel from './SidePanel'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>MN Sudoku App</h1>
      <Board/>
      <SidePanel/>
    </div>
    )
  }
}
