import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [accountName, setAccountName] =useState("")

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (currentUser) {
      setAccountNumber(currentUser.accountNumber);
      setAccountBalance(currentUser.accountBalance);
      setAccountName(currentUser.firstName)
    }
  }, []);

  const navigate =useNavigate();
  
  const onTransfer = () => {
    navigate("/transfer");
  };

  const onDeposit = () => {
    navigate("/deposit");
  };
  const onWithdraw = () => {
    navigate("/withdraw");
  };


  return (
    <>
      <p>Welcome {accountName}!</p>
      <p>Account Number: {accountNumber}</p>
      <p>Account Balance: {accountBalance}</p>
      <button onClick={onTransfer}>Transfer</button>
      <button onClick={onDeposit}>Deposit</button>
      <button onClick={onWithdraw}>Withdraw</button>
    </>
  );
}

export default Dashboard;
