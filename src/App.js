import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h4 className="App-header">MarioPlan</h4>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
