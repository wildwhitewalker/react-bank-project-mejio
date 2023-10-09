import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

function LoginForm({ setUser }) {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    let savedAccounts = [];
    try {
      savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    } catch (err) {
      setErrorMessage("Error accessing saved accounts.");
      return;
    }

    const foundUser = savedAccounts.find(
      (account) => account.userName === loginData.userName
    );

    if (!foundUser || foundUser.password !== loginData.password) {
      setErrorMessage("Username or password is incorrect");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    
    navigate("/dashboard");
  };

  const onClickRegister = () =>{
    navigate("/signup");
  }

  return (
    <div className="min-h-screen">
      <form
      onSubmit={onSubmit}>
        <div className="form-container">
          <h2>Login to your account</h2>
          <label className="text-gray-700">Username</label>
          <input
              type="text"
              name="userName"
              value={loginData.userName}
              onChange={onChange}
              className="input-field"
            />
          <label className="text-gray-700">Password</label>
          <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={onChange}
              className="input-field"
            />
          {errorMessage && (
              <div className="text-red-500">{errorMessage}</div>
          )}
          <button type="sunmit" className="btn">Login</button>
          <div onClick={onClickRegister}>Register Now</div>
          <div>Forgot Username or Password</div>
          <div>Lock My Access</div>
          <div>Inquiry and Other Services ▼</div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
