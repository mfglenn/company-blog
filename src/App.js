//Core Library Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//CSS Imports
import './App.css';

//Component Imports
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesList from './pages/ArticlesList'
import ArticlesPage from './pages/ArticlesPage'

//App Component Definition
export default class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/articles" component={ArticlesList}/>
          <Route path="/article" component={ArticlesPage}/>
        </div>
      </Router>
    )
  }
}