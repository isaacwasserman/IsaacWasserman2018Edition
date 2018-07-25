import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCwDS5J_lAHv5QjqO_20XK4-2o6prT3kIU",
    authDomain: "isaacblog-f5874.firebaseapp.com",
    databaseURL: "https://isaacblog-f5874.firebaseio.com",
    projectId: "isaacblog-f5874",
    storageBucket: "isaacblog-f5874.appspot.com",
    messagingSenderId: "1038185204117"
  };
firebase.initializeApp(config);
export default firebase;
