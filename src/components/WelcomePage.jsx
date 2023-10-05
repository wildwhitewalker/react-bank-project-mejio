import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const onSignup = () => {
    navigate("/signup");
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-3xl font-semibold text-center text-green-700 mb-4">
          Welcome to React Bank
        </h1>
        <p className="text-center text-gray-700 mb-6">
          The best way to manage your money.
        </p>
        <div className="mb-6">
          <label className="text-gray-700">
            Don't have an account?
            <button
              onClick={onSignup}
              className="ml-2 text-green-600 hover:underline focus:outline-none"
            >
              Signup
            </button>
          </label>
        </div>
        <div>
          <label className="text-gray-700">
            Already have an account?
            <button
              onClick={onLogin}
              className="ml-2 text-green-600 hover:underline focus:outline-none"
            >
              Login
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;