/*The file where the Firebase authentication API will be defined to sign up, sign in, sign out etc. 
a user in your application. It is the interface between the official Firebase API and your React application.
*/
//import the previously instantiated auth object from the firebase config file
import { auth } from './firebase';
//Define the authentication functions
// Sign Up. Takes the email and password and uses an official firebase endpoint to create a new user
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In. Takes the email and password and uses the firebase endpoint to sign in the user
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out. The auth object already knows about the authorised user
export const doSignOut = () =>
  auth.signOut();

 // Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
