//The AccountPage component isn’t complicated and doesn’t have any business logic. 
//It merely uses the password forget and password change forms in a central place. 
//In addition, it gets access to the authenticated user object via React’s context as well
// (same as the Navigation component) and thus can display the email address of the currently authenticated user.
import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorisation from './withAuthorisation';

const AccountPage = (props, { authUser }) =>
  <div className = "formWrap">
    <h1>Welcome Back {authUser.email}</h1>
    <div>
    <PasswordForgetForm /><br/>
    <PasswordChangeForm /><br/>
    </div>
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};


const authCondition = (authUser) => !!authUser;

export default withAuthorisation(authCondition)(AccountPage);