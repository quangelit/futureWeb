import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Button, Paragraph } from 'arwes';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <div style={{ margin: 20 }}>
            <Paragraph>Hello World</Paragraph>
          </div>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
