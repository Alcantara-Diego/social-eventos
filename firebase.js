console.log("firebase arquivo sendo acessado")

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 
import { firebaseConfig } from "./firebaseConfig.js"




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


// db.collection("usuários").get().then((snapshot)=>{
//     snapshot.forEach((doc)=>{
//         console.log(doc)
//     })
// });

const usuariosDb = await getDocs(collection(db, "usuários"));
usuariosDb.forEach((doc) => {
    console.table(`Usuário ${doc.data().nome} com o ID sendo ${doc.id}`)
  console.table(doc.data());
});

const postsDb = await getDocs(collection(db, "posts"));

postsDb.forEach(doc =>{
    console.table(doc.data())
})



