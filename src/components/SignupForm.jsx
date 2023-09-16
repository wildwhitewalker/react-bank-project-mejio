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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupData({
      ...signupData,
      [name]: value,
    });
  };


  useEffect(() => {
    const userAccount = [JSON.stringify(signupData)] 
    localStorage.setItem('userData', userAccount )
  }, [userAccount])
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")

    console.log(userAccount)
  };

  

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
