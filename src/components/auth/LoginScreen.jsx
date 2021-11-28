import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { startGoogleLogin, startLoginWithEmailAndPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
const LoginScreen = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui)
    

    const [formValues, handleInputChange] = useForm({
        email: 'nando@email.com',
        password: '123456'
    })

    const loginGoogle = () => {
        dispatch(startGoogleLogin())
    }
    const {email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginWithEmailAndPassword(email, password))
    }
   
    return (
        <div>
            <h3 className="auth__title">Login Screen</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= {email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    outocomplete="false"
                    value= {password}
                    onChange={handleInputChange}

                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with Social networks</p>
                    <div className="google-btn"
                    onClick={loginGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create new account
                </Link>
            </form>
        </div>
    )
}

export default LoginScreen
