import React, { Component } from 'react';
import TextsController from './controllers/textsController';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <TextsController text="src/App.js">
            {texts => (
              <Paragraph
                file={texts.updated}
                update={texts.changeText}
              />
            )}
          </TextsController>
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
