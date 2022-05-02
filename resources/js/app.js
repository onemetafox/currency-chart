
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'


// store.dispatch(authCheck())

render((<Provider store = {store}>
    <Routes/>
  </Provider>),
  document.getElementById('app'),
)