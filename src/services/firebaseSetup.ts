import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh8Llyd9dIZZMq8jrHS_SyXGSHGNvFYz0",
  authDomain: "login-system-3634d.firebaseapp.com",
  projectId: "login-system-3634d",
  storageBucket: "login-system-3634d.appspot.com",
  messagingSenderId: "648531512318",
  appId: "1:648531512318:web:92476176ee0478c27bceaf",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };
