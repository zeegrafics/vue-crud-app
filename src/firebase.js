
import firebase from 'firebase'
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCOiwgA9p5Xev4VOztMC-WU6q8saTbQvQw",
    authDomain: "tekinventory.firebaseapp.com",
    databaseURL: "https://tekinventory.firebaseio.com",
    projectId: "tekinventory",
    storageBucket: "tekinventory.appspot.com",
    messagingSenderId: "476662257664",
    appId: "1:476662257664:web:63adce984d03d9673a20e5"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // firebase utils
  const db = firebase.firestore();
  
  
  // firebase collections
  const suppCollection = db.collection('suppliers');

  export {
      suppCollection
  }