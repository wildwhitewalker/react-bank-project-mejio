

const LoginForm = () => {
    return (
        <form>
            <label>Username</label>
            <input title="username" type="text"/>

            <label>Password</label>
            <input title="password" type="password"/>

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm