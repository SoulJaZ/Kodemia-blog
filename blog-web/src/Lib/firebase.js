import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage"

let firebaseConfig = {
    apiKey: "AIzaSyDzvafmusj4xfW4p4Zzbpgg0ZjEx9QEZms",
    authDomain: "blog-web-01.firebaseapp.com",
    projectId: "blog-web-01",
    storageBucket: "blog-web-01.appspot.com",
    messagingSenderId: "575119465269",
    appId: "1:575119465269:web:d89654ffdfb353eecd4a7c"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export { storage, firebase as default};