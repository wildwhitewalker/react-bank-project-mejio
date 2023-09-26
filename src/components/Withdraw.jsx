import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const navigate = useNavigate();

  const handleWithdraw = () => {
    if (withdrawAmount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    currentUser.accountBalance -= parseFloat(withdrawAmount);

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
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
      />

      <button onClick={handleWithdraw}>Proceed</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default Withdraw;