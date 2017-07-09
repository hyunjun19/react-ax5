import * as React from 'react';
import './App.css';
import AXLayout from './components/AXLayout';

// const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <AXLayout config="config test" style={{ width: 100 }}>
        <p>ok</p>
      </AXLayout>
    );
  }
}

export default App;
