import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleSubmit}>
        <input
        type={'text'}
        placeholder="Name"
        name='name'
        className='auth__input'
        autoComplete='off'
        />
        <input
        type={'email'}
        placeholder="Email"
        name='email'
        className='auth__input'
        autoComplete='off'
        />
        <input
        type={'password'}
        placeholder="Password"
        name='password'
        className='auth__input'
        />
        <input
        type={'password'}
        placeholder="Confirm Password"
        name='password2'
        className='auth__input'
        />

        <button 
        className='btn btn-primary btn-block mb-5'
        type={'submit'}
        // disabled={true}
        >
          Login
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