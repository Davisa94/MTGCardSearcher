import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import CardSearch from './CardSearch';
import NickNameCard from './NickNameCard';


export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <h2>Welcome Home</h2>
    }
}