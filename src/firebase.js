import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
apiKey: "AIzaSyBsPuDiX8qJs1pmtj7fDPqpEwFeo4SCdvQ",
  authDomain: "socialapp-17226.firebaseapp.com",
  databaseURL: "https://socialapp-17226-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialapp-17226",
  storageBucket: "socialapp-17226.appspot.com",
  messagingSenderId: "605228920802",
  appId: "1:605228920802:web:1f511d41f45335e11f93bb",
  measurementId: "G-W4XDY7XRP5"
};

firebase.initializeApp(config);
firebase.database();
firebase.storage();

export default firebase;
