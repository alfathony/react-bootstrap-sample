import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Topbar from './components/NavbarComponent';
import Header from './components/HeaderComponent';
import Body from './components/BodyComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Topbar/>
        <Header/>
        <Body/>
      </Fragment>
    );
  }
}

export default App;
