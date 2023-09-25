import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard({ user }) {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const currentUser = savedAccounts.find((account) => account.userName === user);

    if (currentUser) {
      setAccountNumber(currentUser.accountNumber);
      setAccountBalance(currentUser.accountBalance);
    }
  }, [user]);

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
      <p>Welcome {user}</p>
      <p>Account Number: {accountNumber}</p>
      <p>Account Balance: {accountBalance}</p>
      <button onClick={onTransfer}>Transfer</button>
      <button onClick={onDeposit}>Deposit</button>
      <button onClick={onWithdraw}>Withdraw</button>
    </>
  );
}

export default Dashboard;
