import React from 'react'
import ReactDOM from 'react-dom'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from 'components/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Route path="/" component={Component} />
      </Router>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (__DEV__ && __HMR__ && module.hot) {
  module.hot.accept('components/App', () => {
    render(App)
  })
}

if (process.env.NODE_ENV === 'development') {
  // print global var
  console.log('NODE_ENV', typeof NODE_ENV, NODE_ENV)
  console.log('process.env.NODE_ENV', typeof process.env.NODE_ENV, process.env.NODE_ENV)
  console.log('__HMR__', typeof __HMR__, __HMR__)
  console.log('__DEV__', typeof __DEV__, __DEV__)
  console.log('__PROD__', typeof __PROD__, __PROD__)
}
