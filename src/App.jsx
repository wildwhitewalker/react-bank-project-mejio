import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import SignupForm from "./components/SignupForm";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransferFunds from "./components/TransferFunds";

function App() {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="transfer" element={<TransferFunds />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;