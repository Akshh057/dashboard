import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAIHPGqbfpS55HC5-l4p5KtcgtnmcW7iuw",
    authDomain: "admin-dashboard-eba82.firebaseapp.com",
    projectId: "admin-dashboard-eba82",
    storageBucket: "admin-dashboard-eba82.appspot.com",
    messagingSenderId: "648436714266",
    appId: "1:648436714266:web:809c0c280b99304e677aa3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;