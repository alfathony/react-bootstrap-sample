import React, { Component, Fragment } from 'react';
import './App.css';

import Topbar from './components/NavbarComponent';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/BodyComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Topbar/>
        <HeaderComponent/>
        <Body/>
      </Fragment>
    );
  }
}

export default App;
