import React, {useEffect} from 'react'
import "./App.css";
import {useDispatch} from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import {initGloves} from "./reducers/glovesReducer";
import Gloves from "./components/products";
import Header from "./components/header";
import Home from "./components/home";
import {initBeanies} from "./reducers/beaniesReducer";
import store from "./store";
import Switcher from './components/switcher'
import {initMasks} from "./reducers/facemasksReducer";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initGloves())
    dispatch(initBeanies())
    dispatch(initMasks())
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switcher/>
        {/*<Switch>*/}
        {/*  <Route path="/gloves">*/}
        {/*    <Gloves type="gloves"/>*/}
        {/*  </Route>*/}
        {/*  <Route path="/beanies">*/}
        {/*    <Gloves type="beanies"/>*/}
        {/*  </Route>*/}
        {/*  <Route path="/facemasks">*/}
        {/*    <Gloves type="facemasks"/>*/}
        {/*  </Route>*/}
        {/*  <Route path="/">*/}
        {/*    <Home/>*/}
        {/*  </Route>*/}
        {/*</Switch>*/}
      </Router>
    </div>
  );
}

export default App;
