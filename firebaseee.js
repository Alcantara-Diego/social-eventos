console.log("firebase arquivo sendo acessado")

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { firebaseConfig } from "./firebaseConfig.js";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function fetchData() {
//   try {
//     const usuariosDb = await getDocs(collection(db, "usuários"));
//     usuariosDb.forEach((doc) => {
//       console.table(`Usuário ${doc.data().nome} com o ID sendo ${doc.id}`);
//       console.table(doc.data());
//     });

//     const postsDb = await getDocs(collection(db, "posts"));
//     postsDb.forEach((doc) => {
//       console.table(doc.data());
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the asynchronous function
// fetchData();
