import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cv from "./pages/Cv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<Cv />} />
        {/* <Route path="/about" element={<AboutPage />}  */}
      </Routes>
    </Router>
  );
}

export default App;
