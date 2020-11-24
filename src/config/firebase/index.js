import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
// Please register on firebase.com and signup with your gmail account
const firebaseConfig = {
  apiKey: 'yourapiKey',
  authDomain: 'yourauthDomain',
  databaseURL: 'yourdatabaseURL',
  projectId: 'yourprojectId',
  storageBucket: 'yourstorageBucket',
  messagingSenderId: 'yourmessagingSenderId',
  appId: 'yourappid',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
