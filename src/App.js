import React, { Component } from 'react';
import './App.css';
import FormComponent from './component/FormComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={FormComponent} />
            <Route path="/home" component={HomeComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
