import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import CardSearch from './CardSearch';
import NickNameCard from './NickNameCard';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Home/>;
                <CardSearch/>
                <NickNameCard/>
            </div>
        ) 
    }
}

const mainDiv = document.getElementById('app');
render (<App/>, mainDiv);
