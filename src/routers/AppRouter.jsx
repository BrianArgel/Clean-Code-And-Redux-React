import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Journal from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'
import {firebase} from '../firebase/firebase-config'
import { login } from '../actions/auth'

const AppRouter = () => {
    const dispatch = useDispatch()

    const [checking, setChecking] = 

    useEffect(() => {
     firebase.auth().onAuthStateChanged((user) =>{
         if(user?.uid) {
            dispatch(login(user.uid, user.displayName))
         }
     })
    }, [dispatch])
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={Journal} />
            </Switch>
        </Router>
    )
}

export default AppRouter
