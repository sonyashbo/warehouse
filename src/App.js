import React, { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { initGloves } from './reducers/glovesReducer'
import Header from './components/header'
import { initBeanies } from './reducers/beaniesReducer'
import Switcher from './components/switcher'
import { initMasks } from './reducers/facemasksReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initGloves())
    dispatch(initBeanies())
    dispatch(initMasks())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switcher/>
      </Router>
    </div>
  )
}

export default App
