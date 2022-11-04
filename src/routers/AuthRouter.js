import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'

const AuthRouter = () => {
  return (
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
  )
}

export default AuthRouter