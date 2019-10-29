import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
