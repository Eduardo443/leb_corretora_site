import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home.jsx'


export default () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Redirect from='*' to='/' />
    </Switch>