import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfBtqtb48Jc-f9OH22Yg4495xiwEfH15M",
    authDomain: "public-planner-61352.firebaseapp.com",
    projectId: "public-planner-61352",
    storageBucket: "public-planner-61352.appspot.com",
    messagingSenderId: "348150887284",
    appId: "1:348150887284:web:ca92b456e902e91d35b221",
};

// init Firebase
firebase.initializeApp(firebaseConfig);

// init Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
