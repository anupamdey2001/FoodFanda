import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDZ0HMyPWq2Tp5PLDgvjZLV50RiiTBZwG0",
  authDomain: "food-funda-8b344.firebaseapp.com",
  projectId: "food-funda-8b344",
  storageBucket: "food-funda-8b344.appspot.com",
  messagingSenderId: "396359018776",
  appId: "1:396359018776:web:c7643f8b3ee318deb5d66d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db} ;