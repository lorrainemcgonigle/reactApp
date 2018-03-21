/**
*consists of the page, a form, and a link. Whereas the form is used to sign up a new user to your application, 
the link is only a redirect to the sign up page, but not used on the sign up page itself. 
it shares the same domain and therefore shares the same file as the sign up page and sign up form.
*/
/*
*(Line 26)initialize the state of the component. It will capture the user information such as username, email, and password. 
There will be two password fields for a password confirmation step. In addition, there is an error state to 
capture an error object in case of the sign up request to the Firebase API fails. The state is initialized by an object destructuring.
*/
/*
* (Line 38) implement all the input fields to capture those information in the render method of the component. 
 *The input fields need to update the local state of the component by using their onChange handler.
*/
import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
        <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  Location: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = (event) => {
  	    const {
      username,
      email,
      passwordOne,
      Location,
    } = this.state;
        const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
                // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email, Location)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
       })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();

  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      Location,
      error,
    } = this.state;
        const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      Location === '' ||
      username === '';
    return (
      <form onSubmit={this.onSubmit}>
      <div>
        <label>Full Name   </label>
          <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        /><br/>
        <label>Email   </label>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        /><br/>
        <label>Password   </label>
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        /><br/>
        <label>Re-enter password   </label>
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        /><br/>
        <label>Location  </label>
          <input 
          value={Location}
          onChange={event => this.setState(byPropKey('Location', event.target.value))}
          type="text"
          placeholder="Location"
          /><br/>
          </div>
          <progress value="0" max="100" id="progressBar"></progress>
        <input type="file" value="upload" id="filebutton"/>
        <button type="submit">
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
        </button>
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>


export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};