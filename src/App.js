import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Nav from './components/Nav';
import NewsContainer from './components/NewsContainer';

export default class App extends Component {
  render() {
    return (
      <>
      <Nav />
      
      <NewsContainer/>
      </>
      
    )
  }
}

