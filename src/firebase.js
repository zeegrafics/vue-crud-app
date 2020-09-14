
const firebase = require('firebase');
require('firebase/firestore');

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
  const auth = firebase.auth()
  const currentUser = auth.currentUser
  
  
  // firebase collections
  const suppCollection = db.collection('suppliers');
  const catCollection = db.collection('categories');
  const prodCollection = db.collection('products');
  const custCollection = db.collection('customers');
  const smCollection = db.collection('salesman');
  const salesCollection = db.collection('sales');
  const discCollection = db.collection('discounts');
  const taxCollection = db.collection('taxes');
  const promCollection = db.collection('promotions');

  export {
      auth,
      currentUser,
      suppCollection,
      catCollection,
      prodCollection,
      custCollection,
      smCollection,
      salesCollection,
      discCollection,
      taxCollection,
      promCollection
  }