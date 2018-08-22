import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImportFromFileBodyComponent from './ImportFromFileBodyComponent';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.uploadFile = this.uploadFile.bind(this);
  }
  
  uploadFile(event) {
      let file = event.target.files[0];
      
      if (file) {
        let data = new FormData();
        data.append('file', file);
        console.log(data);
        // axios.post('/files', data)...
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <input type="file" accept=".txt" onChange={this.uploadFile}/> */}
        <ImportFromFileBodyComponent/>
      </div>
    );
  }
}

export default App;
