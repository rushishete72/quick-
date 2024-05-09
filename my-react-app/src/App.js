import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accordian from "./index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Accordian />
        </Route>
        {/* Add more routes as needed */}
      </Router>
    </div>
  );
}

export default App;

