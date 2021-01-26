import React, { Component } from 'react'
import Board from './components/Board'
import SidePanel from './components/SidePanel'

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row"><h1>MN Sudoku App</h1></div>
          <div className="row align-items-start">
            <div className="col"><Board/></div>
            <div className="col"><SidePanel/></div>
          </div>
        </div>

      </div>
    )
  }
}
