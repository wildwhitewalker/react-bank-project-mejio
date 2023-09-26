import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const [depositAmount, setDepositAmount] = useState(0);
  const navigate = useNavigate();

  const handleDeposit = () => {
    if (depositAmount <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    currentUser.accountBalance += parseFloat(depositAmount);

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setAccountBalance(currentUser.accountBalance);
    navigate("/dashboard");
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <label>Enter Amount</label>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>Proceed</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default Deposit;
