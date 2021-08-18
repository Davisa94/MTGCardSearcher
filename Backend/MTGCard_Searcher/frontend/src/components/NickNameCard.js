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
        // magical binder
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
                <Button color="secondary" variant="containted">
                    Submit a Nickname
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="Primary" variant="containted" to="/" component={Link}>
                    Home
                </Button>
            </Grid>
        </Grid>)
    }
}