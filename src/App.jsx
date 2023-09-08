import LoginForm from "./components/LoginForm"
import AccountSummary from "./components/AccountSummary"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TransactionHistory from "./components/TransactionHistory"
import TransferFunds from "./components/TransferFunds"

function App() {
  return (
    <div>
      <header className = 'Header'> Bank of React Coders</header>
      <main>
        <LoginForm />
      </main>
      <footer>Coding Project Intended Only</footer>
    <div/>
  );
}
 export default App