import React, { Component } from 'react'
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';


export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Footer />
        <Main />
      </div>  
    )
  }
}

