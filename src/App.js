import React from 'react';
import './App.css';
import Home from './components/Home'

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Game Stats</h1>
          </p>
        </header>
          <Home></Home>
      </div>
    );
  }
}

export default App;
