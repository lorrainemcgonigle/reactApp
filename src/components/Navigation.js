//uses the link component to link the app to different defined routes. if the user is authorised the links will reflect that
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = (props, { authUser }) =>
  <div className = "navbar">
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>
  Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className = "navbarOption">
    <Link to={routes.LANDING}>Home Page</Link>
    <Link to={routes.SIGN_IN} id = "Link">Sign In</Link>
  </ul>

export default Navigation;