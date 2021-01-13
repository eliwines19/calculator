import React from 'react';
import './css/app.css';
import Calculator from './Calculator';

class App extends React.Component {

  render(){
    return(
      <div id="app">
        <Calculator />
      </div>
    )
  }
}

export default App;
