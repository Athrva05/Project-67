import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBxw4vvYzSqHLDXLd08r7dKHUkb74ZKfn8",
  authDomain: "pro-c67-e29b6.firebaseapp.com",
  databaseURL: "https://pro-c67-e29b6-default-rtdb.firebaseio.com",
  projectId: "pro-c67-e29b6",
  storageBucket: "pro-c67-e29b6.appspot.com",
  messagingSenderId: "705109357270",
  appId: "1:705109357270:web:3f4e2d99fd7fc9c5dc8f77",
  measurementId: "G-VPMW5MKJ4H"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();