import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"

const firebaseConfig = {

  apiKey: "AIzaSyDVCBhNH-Ht-qyEZvbsOqq378__YSxMqco",

  authDomain: "testing-offline-e2529.firebaseapp.com",

  projectId: "testing-offline-e2529",

  storageBucket: "testing-offline-e2529.appspot.com",

  messagingSenderId: "1070849200316",

  appId: "1:1070849200316:web:8fe127db3ceea6e071c0b9"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


document.getElementById('btn').addEventListener("click", async function () {
  //guardarUser;
  var nombre = document.getElementById("nombre").value;
  var coment = document.getElementById("comentario").value;
  try {
    const docRef = await addDoc(collection(db, "persona"), {
      nombre: nombre,
      comentario: coment
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  var nombre = '';
  var coment = '';
});


