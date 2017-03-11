import React, { Component } from 'react';
import {AddContact} from './addContact';

class Contact extends Component {
    render() {
        return (
            <div className="main" style={{display:'flex',justifyContent:'space-around'}}>
                <AddContact/>
            </div>
        );
    }
}

export default Contact;
