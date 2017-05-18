import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from './NavLink';

import Home from './Home';
import Page1 from './Page1';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Page 1',
  to: '/page-1',
  icon: 'bookmark',
}];

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="dfunkt"
            toolbarTitle="Mandate management system"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/page-1" location={location} component={Page1} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
