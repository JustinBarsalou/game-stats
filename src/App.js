import React from 'react';
import './App.css';
import Home from './components/Home'
import HomeTwo from './components/Home2'
const API = require('call-of-duty-api')();


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: ""
  //   }

  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Game Stats</h1>
          </p>
        </header>

          <Home></Home>

          <HomeTwo></HomeTwo>
          
      </div>
    );
  }
}

export default App;
