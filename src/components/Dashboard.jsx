import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TransactionHistory from "./TransactionHistory";
import BudgetTracker from "./BudgetTracker";
import Sidebar from "./Sidebar";
import './Dashboard.css';

function Dashboard() {
  const [account, setAccount] = useState({
    number: "",
    balance: 0,
    name: "",
    fullName: "",
    budgets: {},
    transactions: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setAccount({
        number: storedUser.accountNumber,
        balance: storedUser.accountBalance,
        name: storedUser.firstName,
        fullName: `${storedUser.firstName} ${storedUser.lastName}`,
        budgets: storedUser.budgets || {},
        transactions: storedUser.transactions || [],
      });
    }
  }, []);

  const onTransfer = () => navigate("/transfer");
  const onWithdraw = () => navigate("/withdraw");
  const onDeposit = () => navigate("/deposit");

  const addBudget = (name, amount) => {
    const newBudgets = { ...account.budgets, [name]: amount };
    const newTransactions = [...account.transactions, { date: new Date().toISOString(), description: `Budget for ${name}`, amount: -amount }];
    const newBalance = account.balance - amount;
    
    setAccount({
        ...account,
        budgets: newBudgets,
        transactions: newTransactions,
        balance: newBalance
    });
  };

  const removeBudget = (name) => {
      const returnedAmount = account.budgets[name];
      const newTransactions = [...account.transactions, { date: new Date().toISOString(), description: `Returned from ${name} budget`, amount: returnedAmount }];
      const newBalance = account.balance + returnedAmount;

      const newBudgets = { ...account.budgets };
      delete newBudgets[name];
      
      setAccount({
          ...account,
          budgets: newBudgets,
          transactions: newTransactions,
          balance: newBalance
      });
  };

  const onUpdateCurrentUser = (updatedUser) => {
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  return (
    <div className="dashboard">
      <header className="header">
      <div className="sidebar">
          <Sidebar />
      </div>
        <h1>Welcome {account.name}!</h1>
        <div>
            <button className="button button-blue">Get the App</button><span />
            <button className="button button-blue">Apply for a Loan</button> <span />
              <button onClick={onTransfer} className="btn bg-blue-500 text-white">Transfer</button> <span />
              <button onClick={onDeposit} className="btn bg-green-500 text-white">Deposit</button>  <span />
              <button onClick={onWithdraw} className="btn bg-red-500 text-white">Withdraw</button>  <span />
         </div>
      </header> 

      <div className="main-section">
        <div className="main-content">
          <div className="details-section">
            <div className="card account-details">
              <h1>Php {account.balance}</h1>
              <h3>{account.number}</h3>
              <p>{account.fullName}</p>
              
            </div>

            <div className="card budget">
            <BudgetTracker 
              budgets={account.budgets}
              onAddBudget={addBudget}
              onRemoveBudget={removeBudget}
              onUpdateCurrentUser={onUpdateCurrentUser}
              />
            </div>
          </div>

          <div className="transactionHistory">
            <TransactionHistory transactions={account.transactions} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
