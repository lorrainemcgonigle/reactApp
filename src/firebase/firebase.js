/*The file where all the configuration goes 
that you have seen previously on your Firebase dashboard. 
In addition, Firebase itself will be instantiated in this file.
*/
import * as firebase from 'firebase';//import the firebase object from the package installed
  const config = {
    apiKey: "AIzaSyDiUcBb8L5PHUCMs3NQTbK6tv-FzGQrUHs",
    authDomain: "cosmet-users.firebaseapp.com",
    databaseURL: "https://cosmet-users.firebaseio.com",
    projectId: "cosmet-users",
    storageBucket: "cosmet-users.appspot.com",
    messagingSenderId: "8164921910"
  };
  //initialise with the config object created above
  if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
//initialise the auth object and export it
const auth = firebase.auth();
//initialise the storage auth and export it
const storage = firebase.storage().ref();

export {
	db,
  auth,
  storage,
};
