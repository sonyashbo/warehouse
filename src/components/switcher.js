import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import Gloves from './products'
import Home from './home'
import gloveImg from '../img/glove.jpg'
import maskImg from '../img/facemask.jpg'
import beanieImg from '../img/beanie.jpg'

const Switcher = (props) => {
  return (
    <Switch>
      <Route path="/gloves">
        <Gloves items={props.gloves} image={gloveImg}/>
      </Route>
      <Route path="/beanies">
        <Gloves items={props.beanies} image={beanieImg}/>
      </Route>
      <Route path="/facemasks">
        <Gloves items={props.facemasks} image={maskImg}/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  )
}

const mapStateToProps = (state) => {
  return {
    gloves: state.gloves,
    beanies: state.beanies,
    facemasks: state.facemasks
  }
}

const mapDispatchToProps = {}

const ConnectedSwitcher = connect(mapStateToProps, mapDispatchToProps)(Switcher)
export default ConnectedSwitcher