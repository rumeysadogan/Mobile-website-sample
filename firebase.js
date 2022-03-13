// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgbmgZKB1y437GV_Spn2GngYhJvyir5LU",
    authDomain: "acrux-e1f47.firebaseapp.com",
    projectId: "acrux-e1f47",
    storageBucket: "acrux-e1f47.appspot.com",
    messagingSenderId: "474043066238",
    appId: "1:474043066238:web:54e1232370f451ca3bb52f"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const fireStore = firebase.firestore();
export {auth,fireStore};
