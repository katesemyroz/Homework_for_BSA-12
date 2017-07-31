import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import MainComponent from './components/mainComponent'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './components/reducers/mainComponentReducer'

const store = createStore(
  reducer
)

render(
    (<Provider store={store}>
    	<Router history={browserHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={MainComponent} />
	        </Route>
        </Router>
    </Provider>)
    , document.getElementById('root')
)
