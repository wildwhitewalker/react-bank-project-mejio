import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [signupData, setsignupData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    userName: '',
    password: '',
    accountNumber: '', 
    accountBalance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupData({
      ...signupData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const generateAccountNumber = () => {
      const existingAccountNumber = JSON.parse(localStorage.getItem('accounts')) || [];
      let newAccountNumber;

      do {
        newAccountNumber = String(Math.floor(1000000000 + Math.random() * 9000000000));
      } while (existingAccountNumber.some(account => account.accountNumber === newAccountNumber));
      return newAccountNumber;
    };

    const newAccountNumber = generateAccountNumber();
    console.log(newAccountNumber)

    setsignupData({
      ...signupData,
      accountNumber: newAccountNumber,
    });
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

    savedAccounts.push(signupData);

    localStorage.setItem('accounts', JSON.stringify(savedAccounts));

    alert("Account is Created!");
    navigate("/login");
  };
  

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="gap-10 border-spacing-2">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={signupData.middleName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={signupData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={signupData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <label>
            <input type="checkbox" required />
            Accept Terms and Condition
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupForm;
