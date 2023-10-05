import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    setUser(foundUser.accountNumber);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    
    navigate("/dashboard");
  };

  const onClickSignup = () =>{
    navigate("/signup");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500">
      <h2 className="text-3xl font-semibold text-white mb-6">Login</h2>
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md max-w-md">
        <div className="mb-4">
          <label className="text-gray-700">Username:</label>
          <input
            type="text"
            name="userName"
            value={loginData.userName}
            onChange={onChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={onChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
        {errorMessage && (
            <small className="text-red-500">{errorMessage}</small>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Log in
        </button>
        <div className="mt-2 text-gray-700">
          Don't have an account?{" "}
          <button
            onClick={onClickSignup}
            className="text-green-500 hover:underline focus:outline-none"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
