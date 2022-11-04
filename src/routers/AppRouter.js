import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import JournalScreen from '../screens/JournalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import AuthRouter from './AuthRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route 
            exact
            path='/'
            >
                <JournalScreen/>
            </Route>
            <Route 
            path='/auth'
            >
                <AuthRouter/>
            </Route>
            <Route 
            path='*'
            >
                <NotFoundScreen/>
            </Route>

        </Switch>
    </BrowserRouter>
  )
}

export default AppRouter