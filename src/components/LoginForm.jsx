import { useState } from "react";
import { useNavigate } from "react-router-dom";



function LoginForm({setUser}) {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    setUsernameErrorMessage("");
    setPasswordErrorMessage("");

    if (loginData.userName === "") {
      setUsernameErrorMessage("Username is Empty!");
      return;
    }

    if (loginData.password === "") {
      setPasswordErrorMessage("Password is Empty!");
      return;
    }

    const savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const foundUser = savedAccounts.find((account) => {
      return account.userName === loginData.userName;
    });

    if (!foundUser) {
      setUsernameErrorMessage("User does not exist");
      return;
    }

    if (foundUser.password !== loginData.password) {
      setPasswordErrorMessage("Username and password do not match");
      return;
    }

    if (foundUser.userName === loginData.userName && foundUser.password === loginData.password) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser.userName);
      navigate("/dashboard");
    }
  };
  const OnClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-green-100">
      <h2 className="text-3xl font-semibold text-green-700">Login</h2>
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md max-w-md">
        <div>
          <label className="text-gray-700">Username:</label>
          <input
            type="text"
            name="userName"
            value={loginData.userName}
            onChange={onChange}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-green-500"
          />
          {usernameErrorMessage && (
            <small className="text-red-400">{usernameErrorMessage}</small>
          )}
        </div>

        <div>
          <label className="text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={onChange}
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-green-500"
          />
          {passwordErrorMessage && (
            <small className="text-red-400">{passwordErrorMessage}</small>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Log in
        </button>
        <div>
          <label className="text-gray-700">
            Don't have an account?
            <button
              onClick={OnClick}
              className="text-green-500 hover:underline focus:outline-none"
            >
              Signup
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
