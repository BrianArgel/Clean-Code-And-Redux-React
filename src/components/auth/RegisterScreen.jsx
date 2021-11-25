import React from 'react'
import {Link} from 'react-router-dom'
const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Register Screen</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    outocomplete="false"

                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with Social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/login">
                    Login now
                </Link>
            </form>
        </div>
    )
}

export default RegisterScreen
