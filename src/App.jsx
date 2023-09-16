import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";


function App() {

  return (
    <Router>
      <div className="flex flex-col border-solid border-gray-400">
        <Routes>
          <Route path="welcome" element={<WelcomePage />}></Route>
        </Routes>
        <Routes>
          <Route path="login" element={<LoginForm />}></Route>
        </Routes>
        <Routes>
          <Route path="signup" element={<SignupForm />}></Route>
        </Routes>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App; 