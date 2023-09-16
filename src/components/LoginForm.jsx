import { useState } from "react";  
import { useNavigate } from "react-router-dom";


function LoginForm(props) {
    //const { setCurrentPage, } = props
    const [loginData, setLoginData] = useState({
      username: '',
      password: '',
    });
    
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

    const OnChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ 
        ...loginData,
        [name]: value,
      });
    };

    const navigate = useNavigate()
    const onClick = () => {
        navigate("/signup")
    }

    const OnSubmit = (e) => {
      e.preventDefault(); 


     /* setUsernameErrorMessage() 
      setPasswordErrorMessage()  
      

      if (username === '') {
        setUsernameErrorMessage('Username is Empty!')
        return
      }
  
      if (password === '') {
        setPasswordErrorMessage('Password is Empty!')
        return
      }*/

      const accounts = JSON.parse(localStorage.getItem('userData'))
      const currentAccount = accounts.find(account => username === accounts.username)

      if (!currentAccount) {
        setUsernameErrorMessage('User does not exist')
        return
      }

      if (currentAccount.password !== loginData.password) {
        setPasswordErrorMessage('Username and password does not match')
        return
      }

      if (currentAccount.username === loginData.username && currentAccount.password === loginData.password) {
        useNavigate("/dashboard")
      }

     
    };
   
   


    return (
      <div className="flex flex-col gap-10 border-spacing-2">
        <h2>Login</h2>
        <form onSubmit={OnSubmit}>
          <div>
            <label >Username:</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={OnChange}
              required
            />
            {usernameErrorMessage && (
          <small className="text-red-700">{usernameErrorMessage}</small>)}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={OnChange}
              required
            />
           {passwordErrorMessage && (
          <small className="text-red-700">{passwordErrorMessage}</small>
        )}
          </div>

          <button type="submit">Log in</button>
          <div> <label>
            Don't have an account?
            <button onClick={onClick} >Signup</button>
          </label>
          </div>
         
        </form>
      </div>
    );
  }
  


export default LoginForm
