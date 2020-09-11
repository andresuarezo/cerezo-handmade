import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBrDL9pwoHNo5w_SGTM8bAhQK26xNmgNeE",
    authDomain: "coderhouse-ecommerce-47b0c.firebaseapp.com",
    databaseURL: "https://coderhouse-ecommerce-47b0c.firebaseio.com",
    projectId: "coderhouse-ecommerce-47b0c",
    storageBucket: "coderhouse-ecommerce-47b0c.appspot.com",
    messagingSenderId: "239827335770",
    appId: "1:239827335770:web:4b9c31cfb3b94f3a45b663"
  });
  
  export function getFirabase(){
      return app;
  }
  
  export function getFirestore(){
      return firebase.firestore(app);
  }