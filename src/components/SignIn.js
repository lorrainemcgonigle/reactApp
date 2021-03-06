//Basically the same as the signup form. If the sign in succeeds, the local state is updated with the initial state and 
//the user is redirected again. If the sign in fails, an error object is stored in the local state and an error message should show up. 
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />

  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
    <div className = "signInWrap">
      <form className = "signInForm" onSubmit={this.onSubmit}>
      <div className = "signInFormDetails">
      <label>Enter you email:</label><br/>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        /><br/>
        <label>Enter password</label><br/>
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        /><br/>
        <br/>
        <button className = "btn" disabled={isInvalid} type="submit">
          Sign In
        </button>
        <br/>
            <PasswordForgetLink />
            <SignUpLink />
        { error && <p>{error.message}</p> }
        </div>
      </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};