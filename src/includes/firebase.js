import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  limit,
  startAfter,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfpui1XwDw9JVAWYZ8R-4O-zvBopi2jFA",
  authDomain: "music-ef0d2.firebaseapp.com",
  projectId: "music-ef0d2",
  storageBucket: "music-ef0d2.appspot.com",
  //messagingSenderId: "449582714076",
  appId: "1:449582714076:web:2875e236e4594c25397819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
//const auth = getAuth(app);
const auth = getAuth();

/*db.enablePersistence().catch((error) => {
  console.log(`Firebase peristence error ${error.code}`);
});*/

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
      }
  });


//const usersCollection = db.collection('users');
const usersCollection = collection(db, "users");

const storage = getStorage(app);
//const storageRefSongs = ref(storage, "songs");
const songsCollection = collection(db, "songs");
const commentsCollection = collection(db, "comments");

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  usersCollection,
  collection,
  addDoc,
  doc,
  setDoc,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  songsCollection,
  getDownloadURL,
  getDocs,
  getDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  deleteObject,
  orderBy,
  limit,
  startAfter,
  commentsCollection,
};

//import firebase from "firebase/app";
/*import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfpui1XwDw9JVAWYZ8R-4O-zvBopi2jFA",
  authDomain: "music-ef0d2.firebaseapp.com",
  projectId: "music-ef0d2",
  storageBucket: "music-ef0d2.appspot.com",
  //messagingSenderId: "449582714076",
  appId: "1:449582714076:web:2875e236e4594c25397819"
};

// Initiallize Firebase
/firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const db = firebase.firestore;

export { auth, db };*/
