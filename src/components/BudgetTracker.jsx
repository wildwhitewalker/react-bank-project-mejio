import React, { useState } from "react";

function BudgetTracker({ budgets, onAddBudget, onRemoveBudget, accountBalance, onUpdateBalance }) {
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddBudget = () => {
    setErrorMessage("");  

    const parsedAmount = parseFloat(budgetAmount);

    if (!budgetName || !budgetAmount) {
      setErrorMessage("Please enter a budget name and amount.");
      return;
    }

    if (parsedAmount <= 0) {
      setErrorMessage("Please enter a valid budget amount.");
      return;
    }

    if (parsedAmount > accountBalance) {
      setErrorMessage("Insufficient account balance to allocate this budget.");
      return;
    }

    if (budgets[budgetName]) {
      setErrorMessage("Budget name already exists. Consider updating it instead.");
      return;
    }

    onAddBudget(budgetName, parsedAmount);
    onUpdateBalance(accountBalance - parsedAmount);
    setBudgetName("");
    setBudgetAmount("");
  };

  const handleRemoveBudget = (budgetName) => {
    const returnedAmount = budgets[budgetName];
    onUpdateBalance(accountBalance + returnedAmount);
    onRemoveBudget(budgetName);
  };

  return (
      <div className="bg-white p-4 rounded shadow-md w-full">
      <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Budget Tracker</h3>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Budget Name"
          value={budgetName}
          onChange={(e) => setBudgetName(e.target.value)}
          className="border border-green-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:border-green-500"
        />
        <input
          type="number"
          placeholder="Budget Amount"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
          className="border border-green-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={handleAddBudget}
          className="bg-green-500 hover:bg-green-600 text-green px-4 py-2 rounded w-1/4"
        >
          Add Budget
        </button>
      </div>
      <div>
        {Object.keys(budgets).map((budgetName) => (
          <div key={budgetName} className="flex items-center justify-between mb-2 bg-gray-100 p-2 rounded">
            <span className="font-medium">{budgetName}: Php{budgets[budgetName]}</span>
            <button
              onClick={() => handleRemoveBudget(budgetName)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetTracker;
