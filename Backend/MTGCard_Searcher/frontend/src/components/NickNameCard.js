import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText  from "@material-ui/core/formHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class NickNameCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            multiverseid: '000000',
            nickname: '',
        };
        // magical binders
        this.handleMultiverseidChange = this.handleMultiverseidChange.bind(this);
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleSubmitButtonPress = this.handleSubmitButtonPress.bind(this);
    }

    // state change handlers:
    handleMultiverseidChange(e) {
        this.setState({
            multiverseid: e.target.value,
        });
    }

    handleNicknameChange(e) {
        this.setState({
            nickname: e.target.value,
        });
    }

    // Button Handlers:
    handleSubmitButtonPress(){
        console.log("sanityCheck in NicknameCard component: ");
        console.log(this.state);
        // Create request to send data to API:
        const requestParams = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                multiverseid: this.state.multiverseid,
                nickname: this.state.nickname,
            })
        }
        // Take those parameters and fetch some response from the API
        fetch("/api/name-cards/", requestParams)
        .then((response) =>response.json())
        .then((raw_data) => console.log(raw_data))
        // Testing version:
        // var responseClone; // 1
        // fetch('https://example.com/some/path/to/json')
        // .then(function (response) {
        //     responseClone = response.clone(); // 2
        //     return response.json();
        // })
        // .then(function (data) {
        //     // Do something with data
        // }, function (rejectionReason) { // 3
        //     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
        //     responseClone.text() // 5
        //     .then(function (bodyText) {
        //         console.log('Received the following instead of valid JSON:', bodyText); // 6
        //     });
        // });

    }

    render(){
        return (<Grid container spacing={2}>
            <Grid item xs={12} align="center">
                <Typography component="h3" variant="h3">
                    Pick a nickname for a Card by multiverseID
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type="string" onChange={this.handleMultiverseidChange}></TextField>
                </FormControl>
                <FormHelperText>
                    <div align="center">
                        MultiverseID:
                    </div>
                </FormHelperText>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type="string" onChange={this.handleNicknameChange}></TextField>
                </FormControl>
                <FormHelperText>
                    <div align="center">
                    NickName:
                    </div>
                </FormHelperText>
            </Grid>
            <Grid item xs={12} align="center" onClick={this.handleSubmitButtonPress}>
                <Button color="secondary" variant="contained">
                    Submit a Nickname
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/" component={Link}>
                    Home
                </Button>
            </Grid>
        </Grid>)
    }
}