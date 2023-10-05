import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import WelcomePage from "./components/WelcomePage";
import Sidebar from "./components/Sidebar";
import * as BsIcons from "react-icons/bs";
import SignupForm from "./components/SignupForm";
import TransactionHistory from "./components/TransactionHistory";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import TransferFunds from "./components/TransferFunds";
import BudgetTracker from "./components/BudgetTracker";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  }; 

  return (
    <Router>
      <header className="bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <NavLink
            to="/"
            className="flex flex-col text-black font-semibold text-lg hover:text-black"
          >
            <BsIcons.BsBank2 /> <span>React Bank</span>
          </NavLink>
          {currentUser ? (
            <div>
              <span className="mr-4">Welcome, {currentUser.firstName}</span>
              <Link onClick={handleLogout} className="text-black hover:text-red-600">Logout</Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="mr-4 text-black hover:text-gray-600">Login</Link>
            </div>
          )}
        </nav>
      </header>
      return (
      <main className="container mx-auto p-4">
        {currentUser && <Sidebar />}
        <Routes>
          <Route path="/login" element={<LoginForm setUser={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard currentUser={currentUser} />}>
            <Route path="budget" element={<BudgetTracker />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="transfer" element={<TransferFunds />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="*" element={<Outlet />} /> 
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;