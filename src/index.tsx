import React from 'react'
import { render } from 'react-dom'
import { Provider, combineReducers } from 'fluorine-lib'

import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router'

import './reset.css'

import dispatcher from './dispatcher'
import reducers from './reducers/index'

import App from './containers/app'
import Counter from './components/Counter'

const routes = (
  <Route path='*' component={App}>
    <IndexRoute component={Counter}/>
  </Route>
)

render((
  <Provider
    dispatcher={dispatcher}
    observable={({ reduce }) => combineReducers(reducers)(reduce)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
), document.getElementById('root'))

