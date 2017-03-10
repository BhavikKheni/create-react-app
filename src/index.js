import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import About from './about/about';
import Contact from './contact/contact';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} muiTheme={getMuiTheme(darkBaseTheme)}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="/contact" component={Contact} />
        
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
