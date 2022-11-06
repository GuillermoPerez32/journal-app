import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSignUp } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [values, handleChange] = useForm({
    phone: '',
    email: 'luisguillermo.rodriguez32@gmail.com',
    password: 'sXg.1215',
    password2: 'sXg.1215',
  });

  const {phone, email, password, password2} = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startSignUp(email, password, phone))
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        type={'text'}
        placeholder="Name"
        name='phone'
        className='auth__input'
        autoComplete='off'
        value={phone}
        />
        <input
        onChange={handleChange}
        type={'email'}
        placeholder="Email"
        name='email'
        className='auth__input'
        autoComplete='off'
        value={email}
        />
        <input
        onChange={handleChange}
        type={'password'}
        placeholder="Password"
        name='password'
        className='auth__input'
        value={password}
        />
        <input
        onChange={handleChange}
        type={'password'}
        placeholder="Confirm Password"
        name='password2'
        className='auth__input'
        value={password2}
        />

        <button 
        className='btn btn-primary btn-block mb-5'
        type={'submit'}
        // disabled={true}
        >
          Register
        </button>

        <Link
        className='link'
        to={'/auth/login'}
        >
          Already registered?
        </Link>

      </form>
    </>
  )
}

export default RegisterScreen