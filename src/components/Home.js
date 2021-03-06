import React, { Component } from 'react';

import withAuthorisation from './withAuthorisation';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
  	    const { users } = this.state;
    return (
      <div className = "div1">
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
         { !!users && <UserList users={users} /> }
      </div>
    );
  }
}
const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
    <div>
    <h2>User Photos</h2>
  </div>
    
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorisation(authCondition)(HomePage);