// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';
import Accordian from './index.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Accordian />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
