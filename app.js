import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCu4h1BDCC48XsP_y8vu0ttFPWd-BcltMY",
  authDomain: "user-8c0e9.firebaseapp.com",
  projectId: "user-8c0e9",
  storageBucket: "user-8c0e9.appspot.com",
  messagingSenderId: "892970892840",
  appId: "1:892970892840:web:40d41e0b96c159490ebf1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('btn').addEventListener("click", function() {
//function guarda(){
    var email = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;
  if(password.length>=6){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }else{
    alert ("la contraseña debe tener al menos 6 caracteres");
  } 

  });
