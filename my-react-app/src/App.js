import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accordian from "./index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accordian />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
