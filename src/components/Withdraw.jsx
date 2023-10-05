import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Withdraw({ currentUser, onWithdraw }) {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleWithdraw = () => {
    setErrorMessage("");  // Reset the error message

    if (withdrawAmount <= 0) {
      setErrorMessage("Please enter a valid amount to withdraw.");
      return;
    }

    if (withdrawAmount > currentUser.accountBalance) {
      setErrorMessage("Insufficient Balance");
      return;
    }

    const updatedTransactions = [
      ...currentUser.transactions,
      {
        date: new Date().toISOString(),
        description: `Withdrawn ${withdrawAmount}`,
        amount: parseFloat(withdrawAmount),
      },
    ];

    currentUser.accountBalance -= parseFloat(withdrawAmount);

    onWithdraw(withdrawAmount, updatedTransactions);
    navigate("/dashboard", { state: { message: "Withdrawn successfully!" } });
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-semibold mb-4">Withdraw</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <label className="text-lg">Enter Amount</label>
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