//implement the interface to your Firebase realtime database 
//for the user entity. The file defines two functions: one to create a user and one to retrieve all users.
import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

