import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleWithdraw = () => {

    if (withdrawAmount <= 0) {
      setErrorMessage("Please enter a valid amount to withdraw.");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (withdrawAmount > currentUser.accountBalance) {
      setErrorMessage("Insufficient Balance");
      return;
    }

    const currentAccountBalance = currentUser.accountBalance;
    const updatedAccountBalance = currentAccountBalance - parseFloat(withdrawAmount);

    currentUser.accountBalance = updatedAccountBalance;

    const newTransactions = {
        date: new Date().toISOString(),
        description: `Withdrawn Balance from Own Account`,
        amount: parseFloat(withdrawAmount),
    };
    
    currentUser.transactions.push(newTransactions);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    navigate("/dashboard", { state: { message: "Withdrawn successfully!" } });
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center text-black">
      <h2 className="text-3xl font-semibold mb-4">Withdraw</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <label className="text-lg">Enter Amount </label>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
        />
        <div className="mt-4 space-x-4">
          <button
            onClick={handleWithdraw}
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

export default Withdraw;