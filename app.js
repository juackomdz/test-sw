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

document.getElementById('cons').addEventListener("click", function () {

  //alert('Los datos almacenados son: Nombre: ' + localStorage.getItem('nombre'));
  window.location.href = 'offline.html'
})

window.addEventListener('offline', function () {

  function store() {

    var comn1 = document.getElementById('comentario1');
    var comn2 = document.getElementById('comentario2');
    var check_a = document.getElementById('chka');
    var check_b = document.getElementById('chkb');
    if (typeof Storage !== 'undefined') {
      if (comn1.value.length >= 1) {
        localStorage.setItem('coment1', comn1.value);
      }
      if (comn2.value.length >= 1) {
        localStorage.setItem('coment2', comn2.value);
      }


      if (check_a.checked) {
        localStorage.setItem('cha', check_a.value);
      }

      if (check_b.checked) {
        localStorage.setItem('chb', check_b.value);
      }

      return true;
    }
    return false;
  }

  document.getElementById('btn').addEventListener('click', function () {
    //localStorage.clear()
    store()
  })
  
});




document.getElementById('btn').addEventListener('click', async function () {
  //guardarUser;
  var comn1 = document.getElementById('comentario1').value;
  var comn2 = document.getElementById('comentario2').value;
  var check_a = document.getElementById('chka');
  var check_b = document.getElementById('chkb');
  if(check_a.checked){
    var check1=check_a.value
  }
  else{
    var check1=null
  }
  if(check_b.checked){
    var check2=check_b.value
  }
  else{
    var check2=null
  }
  //var nombre = document.getElementById("nombre").value;
  //var coment = document.getElementById("comentario").value;
  try {
    const docRef = await addDoc(collection(db, "datos"), {
      comentario_1: comn1,
      comentario_2: comn2,
      check1: check1,
      check2: check2
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});