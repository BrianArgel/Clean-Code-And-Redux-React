import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Journal from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'
const AppRouter = () => {
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
