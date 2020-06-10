import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwpKa9eLnHl4FNC361ReEP2Nyv-XG59QM",
  authDomain: "react-e-commerce-65275.firebaseapp.com",
  databaseURL: "https://react-e-commerce-65275.firebaseio.com",
  projectId: "react-e-commerce-65275",
  storageBucket: "react-e-commerce-65275.appspot.com",
  messagingSenderId: "809454379168",
  appId: "1:809454379168:web:8ed10f4c219806d96ba9c5"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()


//for testing only!
window.firebase = firebase;

export default firebase;