import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit({ onDeposit }) {
  const [depositAmount, setDepositAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleDeposit = () => {
    if (depositAmount <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const updatedTransactions = [
      ...currentUser.transactions,
      {
        date: new Date().toISOString(),
        description: `Deposited ${depositAmount}`,
        amount: parseFloat(depositAmount),
      },
    ];

    currentUser.accountBalance += parseFloat(depositAmount);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    onDeposit(depositAmount, updatedTransactions);
    navigate("/dashboard", { state: { message: "Deposit successful!" } });
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-semibold mb-4">Deposit Funds</h2>
      {errorMessage && (
        <p className="text-red-500 mb-2">{errorMessage}</p>
      )}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <label className="text-lg">Enter Amount</label>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
        />
        <div className="mt-4 space-x-4">
          <button
            onClick={handleDeposit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Proceed
          </button>
          <button
            onClick={onCancel}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
