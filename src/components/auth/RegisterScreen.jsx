import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPassword } from '../../actions/auth'
const RegisterScreen = () => {
	const dispatch = useDispatch()
	const { msgError } = useSelector(state => state.ui)
	const [formValues, handleInputChange] = useForm({
		name: 'Brian',
		email: 'orobotuo566gmail.com',
		password: '123456',
		password1: '123456'
	})
	const { name, email, password, password1 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault()
		console.log(name, email, password, password1)
		if (isFormValid()) {
			dispatch(startRegisterWithEmailPassword(email, password, name))
		}
	}
	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError("The name is required"))
			return false
		} else if (!validator.isEmail(email)) {
			dispatch(setError("The email is required"))
			return false
		} else if (password !== password1 || password.length < 5) {
			dispatch(setError("The passwrod should de have min six characters"))
			return false
		}
		dispatch(removeError())
		return true;
	}
	return (
		<div>
			<h3 className="auth__title">Register Screen</h3>
			<form onSubmit={handleRegister}>

				{ msgError &&
					<div className="auth__alert-error">
						{msgError}
					</div>
				}
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					placeholder="password"
					name="password"
					className="auth__input"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					placeholder="Confirm password"
					name="password1"
					className="auth__input"
					autoComplete="off"
					value={password1}
					onChange={handleInputChange}


				/>
				<button
					type="submit"
					className="btn btn-primary btn-block"
				>Register
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
