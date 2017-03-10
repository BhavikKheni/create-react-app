import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import {blue300} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import user from '../public/images.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  render() {
    return (
      <div className="App">

        <AppBar
          title="Contact App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationMenu /></IconButton>}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <List style={{ display: 'flex', justifyContent: 'center',backgroundColor:blue300,height:100 }} >
            <ListItem
              leftAvatar={<Avatar src={user} style={{ height: 70, width: 70 }} />}
            />
          </List>
          <Link to="about"><MenuItem onTouchTap={this.handleClose} style={{ marginTop: 30 }}>about</MenuItem></Link>
          <Link to="/contact"><MenuItem onTouchTap={this.handleClose}>contact</MenuItem></Link>

        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

export default App;
