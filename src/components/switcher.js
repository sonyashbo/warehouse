import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Gloves from "./products";
import Home from "./home";
import React, {useState} from "react";
import {connect} from "react-redux";
import gloveImg from '../img/glove.jpg'
import maskImg from '../img/facemask.jpg'
import beanieImg from '../img/beanie.jpg'

const Switcher = (props) => {
    const [detailsVisible, setDetailsVisible] = useState(false)
    const showDetails = () => {
        debugger
        setDetailsVisible(true)
    }
    return (
        <Switch>
            <Route path="/gloves">
                <Gloves items={props.gloves} image={gloveImg} showDetails={showDetails} detailsVisible={detailsVisible}/>
            </Route>
            <Route path="/beanies">
                <Gloves items={props.beanies} image={beanieImg} showDetails={showDetails} detailsVisible={detailsVisible}/>
            </Route>
            <Route path="/facemasks">
                <Gloves items={props.facemasks} image={maskImg} showDetails={showDetails} detailsVisible={detailsVisible}/>
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