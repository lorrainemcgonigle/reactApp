/*It’s a simple entry point file to the Firebase module (src/firebase/ folder) by grouping and exposing 
 the functionalities from the module to other modules in one file. 
Thus it shouldn’t be necessary for other modules in your application to access any other file than this one to use its functionalities.
*/
import * as auth from './auth';
import * as db from './db';
import * as firebase from './firebase';
//expose the methods and functionality from your firebase module
export {
  auth,
  db,
  firebase,
};