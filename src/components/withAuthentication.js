//If a user is authenticated, store it in the local state and pass the authenticated user object down to all 
//components that are interested in it. Otherwise, pass it down as null. That way, all components interested
// in it can use a conditional rendering to adjust their behavior based on the session state.
import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
  	    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }
     getChildContext() {
      return {
        authUser: this.state.authUser,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }
    render() {
      return (
        <Component />
      );
    }
  }
    WithAuthentication.childContextTypes = {
    authUser: PropTypes.object,
  };
  return WithAuthentication;
}

export default withAuthentication;