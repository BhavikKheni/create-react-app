import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
const style = {
    margin: 12,
    style :{
        height: 500,
        width: 600,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
};
class Contact extends Component {
    render() {
        return (
            <div className="App">
                <Paper style={style.style} zDepth={5}>
                <h3>Contact</h3>

                <TextField
                    hintText="FirstName"
                    floatingLabelText="FirstName"
                /><br/>
                <TextField
                    hintText="LastName"
                    floatingLabelText="LastName"
                /><br/>
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                /><br/><br/>
                <RaisedButton label="Save" primary={true} style={style} />
                <RaisedButton label="Cancel" secondary={true} style={style} />
                </Paper>
            </div>
        );
    }
}

export default Contact;
