import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'

import { Routes } from './routes'
import { globalStyles } from './ui/theme'
import { configureStore } from './store'


const rootElement = document.getElementById('root')
const store = configureStore(window.initialStore || {})

// eslint-disable-next-line no-unused-expressions
injectGlobal`${normalize} ${globalStyles}`

const render = () => {
  ReactDom.render(
    (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ReduxProvider>
    ),
    rootElement,
  )
}

render()

if (module.hot) {
  module.hot.accept(
    ['./routes', './theme', './store'],
    render,
  )
}
