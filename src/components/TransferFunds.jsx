import { useState } from "react";


const TransferFunds = () => {
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [recipientDetails, setRecipientDetails] = useState({
        firstName: "",
        lastName: "",
        accountNumber: "",
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipientDetails({
            ...recipientDetails,
            [name]: value,
         });
    };
    
    
    const handleTransaction = () => {
        if (!transactionAmount || isNaN(transactionAmount)) {
            alert("Please enter a valid amount to transfer.");
            return;
          }
      
        if (parseFloat(transactionAmount) > parseFloat(balance)) {
            alert("Insufficient balance to transfer that amount.");
            return;
          }
      
        if (!recipientDetails.accountNumber) {
            alert("Please enter the recipient's account number.");
            return;
          }
      
    }


    return(
    <>
        <h2>Recievers Details</h2>
        <form onSubmit={handleTransaction} className="gap-10 border-spacing-2">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={recipientDetails.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={recipientDetails.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Account Number:</label>
            <input
              type="number"
              name="accountNumber"
              value={recipientDetails.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Enter Amount</label>
            <input
                type="number"
                value={transactionAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
            />
           </div>
           <button type="submit">Send</button>
        </form>
    </>

    )
}

export default TransferFunds