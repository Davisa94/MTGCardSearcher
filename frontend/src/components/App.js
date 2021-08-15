import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<h1>Sanity Check in main.js</h1>);
    }
}

const mainDiv = document.getElementById('app');
render (<App/>, mainDiv);
