//Core Library Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//CSS Imports
import './App.css';

//Component Imports
import HomePage from './pages/HomePage'

//App Component Definition
class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact/>
        </div>
      </Router>
    )
  }
}

export default App;