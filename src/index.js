import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import glovesReducer from './reducers/glovesReducer'
import store from './store'
import beaniesReducer from './reducers/beaniesReducer'
import facemasksReducer from './reducers/facemasksReducer'

const reducer = combineReducers({
  gloves: glovesReducer,
  beanies: beaniesReducer,
  facemasks: facemasksReducer
})

ReactDOM.render(
  <Provider store={store(reducer)}>
    {/*<BrowserRouter>*/}
    <App/>
    {/*</BrowserRouter>*/}
  </Provider>,
  document.getElementById('root')
)
