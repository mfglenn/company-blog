//Core Library Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//CSS Imports
import './App.css';

//Component Imports
import NavBar from './NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'

//App Component Definition
export default class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/articles" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
          </div>
        </div>
      </Router>
    )
  }
}