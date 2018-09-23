import React, { Component } from 'react';
import './App.css';
import Tab from './components/TabCam';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  render() {
    return (
     <Tab />
    );
  }
}

export default App;
