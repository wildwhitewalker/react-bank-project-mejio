import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransferFunds from "./components/TransferFunds";


function App() {

  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="signup">Signup</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transfer" element={<TransferFunds />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;