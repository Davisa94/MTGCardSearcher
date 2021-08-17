import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import CardSearch from './CardSearch';
import NickNameCard from './NickNameCard';


export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return 
        (
        <Router>
            <Switch>
                <Route path="/">
                    <h1>
                    Welcome Home
                    </h1>
                </Route>
                <Route path="CardSearch" component={CardSearch}/>
                <Route path="NickNameCard" component={NickNameCard}/>
            </Switch>
        </Router>);
    }
}