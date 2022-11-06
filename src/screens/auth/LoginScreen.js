import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, startLoginEmailPass } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

const LoginScreen = () => {

  const dispatch = useDispatch();

  const [values, handleChange] = useForm({
    email: 'luisguillermo.rodriguez32@gmail.com',
    password: ''
  })

  const {email, password} = values;

  const [uiState, setuiState] = useState({
    loading: false,
    errorMsg: null
  })

  const {loading, errorMsg} = uiState

  const handleSubmit = (e) => {
    e.preventDefault();
    setuiState({...uiState, loading:true})
    dispatch(startLoginEmailPass(email, password));
    setuiState({...uiState, loading:false})
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
        type="email"
        placeholder="Email"
        name='email'
        className='auth__input'
        value={email}
        onChange={handleChange}
        />
        <input
        type={'password'}
        placeholder="Password"
        name='password'
        className='auth__input'
        value={password}
        onChange={handleChange}
        />

        <button 
        className='btn btn-primary btn-block'
        type={'submit'}
        disabled={loading}
        >
          Login
        </button>

        <div className='auth__social-networks'>
        
          <p>Login with social networks</p>
          
          <div 
          className="google-btn"
          >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        
        </div>

        <Link
        className='link'
        to={'/auth/register'}
        >
          Create new account
        </Link>

      </form>
    </>
  )
}

export default LoginScreen