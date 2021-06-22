import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDihAwiHrtKSPNoNIp2B6xMwuNWWXEYrqQ",
    authDomain: "hrdeck.firebaseapp.com",
    projectId: "hrdeck",
    storageBucket: "hrdeck.appspot.com",
    messagingSenderId: "11650765215",
    appId: "1:11650765215:web:022fea0493016ceaa56daa",
    measurementId: "G-2QD3K8LTT6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


let storage = firebase.storage();
let database = firebase.database();
let auth = firebase.auth();
let firestore = firebase.firestore();

// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
    firestore, auth, googleProvider, facebookProvider, twitterProvider, database, storage, firebase as default
}