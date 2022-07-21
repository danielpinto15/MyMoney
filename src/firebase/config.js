import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRB7ayXEUQLPqALJL5Bhx_f4huhwi91dk",
    authDomain: "mymoney-81fe6.firebaseapp.com",
    projectId: "mymoney-81fe6",
    storageBucket: "mymoney-81fe6.appspot.com",
    messagingSenderId: "1049891771316",
    appId: "1:1049891771316:web:6f19cab4483269daaed8e1"
  };

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp}