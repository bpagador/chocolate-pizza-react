import React, { Component } from 'react'
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import Artical from './artical'
import Coppyright from './Coppyright'



function App() {
  return (
    <div className="App">
      <Header />
      <Main date = {`15 DEC 2013/Deserts`}/>
      <Artical />
      <Footer author={`Vanessa Stevenson`}/>
      <Coppyright copydate={2013}/>
      
    </div>
  );
}

export default App;
//made a change so I could submit a pull request link 
