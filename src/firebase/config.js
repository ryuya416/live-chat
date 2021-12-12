import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRHtP27HKX-OjJjagcVpmZ3rlx07kR_8g",
  authDomain: "udamy-vue-firebase-sites.firebaseapp.com",
  projectId: "udamy-vue-firebase-sites",
  storageBucket: "udamy-vue-firebase-sites.appspot.com",
  messagingSenderId: "607405705991",
  appId: "1:607405705991:web:38b38b1e42b5f8964893a2",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
