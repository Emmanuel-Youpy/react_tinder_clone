import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcf_6cLw4u4PGfN77HJy712xKn5RTkQbs",
  authDomain: "tinder-clone-5d828.firebaseapp.com",
  databaseURL: "https://tinder-clone-5d828.firebaseio.com",
  projectId: "tinder-clone-5d828",
  storageBucket: "tinder-clone-5d828.appspot.com",
  messagingSenderId: "49286061796",
  appId: "1:49286061796:web:98db402480fe3be909d6f1",
  measurementId: "G-DHGEZC0NZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
