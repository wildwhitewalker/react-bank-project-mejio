import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ currentUser }) {
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
    try {
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
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [currentUser]);

  const onTransfer = () => navigate("/transfer");
  const onWithdraw = () => navigate("/withdraw");
  const onDeposit = () => navigate("/deposit");

  return (
    <div className="dashboard bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 min-h-screen flex-col items-center justify-center text-black grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome {account.name}!</h2>
        <p className="text-lg mb-4">{account.fullName}</p>
        <p className="text-lg mb-4">Account Number: {account.number}</p>
        <p className="text-lg mb-4">Account Balance: Php{account.balance}</p>
        <div className="space-x-4">
          <button
            onClick={onTransfer}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Transfer
          </button>
          <button
            onClick={onDeposit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Deposit
          </button>
          <button
            onClick={onWithdraw}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="col-span-2">
        <BudgetTracker
          budgets={account.budgets}
          accountBalance={account.balance}
        />
      </div>

      <div className="col-span-2 mt-8">
        <TransactionHistory transactions={account.transactions} />
      </div>
    </div>
  );
}

export default Dashboard;