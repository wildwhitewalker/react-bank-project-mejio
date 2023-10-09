import './WelcomePage.css';
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

function WelcomePage() {
    const navigate = useNavigate();

    const onSignup = () => {
        navigate("/signup");
    };

    const onLogin = () => {
        navigate("/login");
    };

    return (
        <div className="welcome-page-bg">
            <div className="header">
                <div className='flex'>
                <BsIcons.BsBank2 className="bank-icon" /><span />
                <h1>React Bank</h1>
                </div>
                <div className="header-options">Investor Relations | Governance | Sustainability | News</div>
                <div>
                <button className="login-button" onClick={onLogin}>LOGIN</button><span />
                <button className="signup-button" onClick={onSignup}>REGISTER</button>
                </div>
            </div>

            <div className="main-content">
                <img src="https://assets.landingi.com/wp-content/uploads/2020/08/20151600/okladka-2-02.png" alt="Woman" className="woman-image"/>
                <div className="slogan">
                    Take sustainable steps today for a better tomorrow
                    <button className="learn-more-button">LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;