import styles from './Login.module.css';
import logo from '../../../Assets/logo.svg';

function Login() {
    return (
        <div className={ styles[ "login-container-background" ] }>
            <div className={ styles[ "login-container" ] }>
                <img src={ logo } alt="Website logo" />
                <p className={' text-4xl font-bold m-8 '}>Login</p> 
            </div>
        </div>
    )
}

export default Login;