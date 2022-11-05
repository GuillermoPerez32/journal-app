import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'

const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth_box-container'>
        <Switch>
          
          <Route 
          exact 
          path='/auth/login'
          >
              <LoginScreen/>
          </Route>
          
          <Route 
          exact 
          path='/auth/register'
          >
              <RegisterScreen/>
          </Route>
          
          <Redirect to='/auth/login'/>
        </Switch>
        
      </div>
    </div>
  )
}

export default AuthRouter