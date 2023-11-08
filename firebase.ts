import {getApp,getApps,initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {Firestore, getFirestore} from 'firebase/firestore'
import {getFunctions} from 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyDEgIUGzzVm6J9ng4JB-psstUERgqh-JQQ",
    authDomain: "chatworld-e6764.firebaseapp.com",
    projectId: "chatworld-e6764",
    storageBucket: "chatworld-e6764.appspot.com",
    messagingSenderId: "940944325289",
    appId: "1:940944325289:web:9b8a99eca78457e60007b8",
    measurementId: "G-Z8TB5P8YS4"
  };

  
  const app =getApps().length ? getApp() : initializeApp(firebaseConfig) ;
  const auth=getAuth(app);
  const db=getFirestore(app);
  const functions=getFunctions(app);

  export {db,functions,auth}