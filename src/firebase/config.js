import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDReVF9UixQ_cMdeiUAvTbLsaJfMJvmvVk",
  authDomain: "estancy-2f2b2.firebaseapp.com",
  projectId: "estancy-2f2b2",
  storageBucket: "estancy-2f2b2.appspot.com",
  messagingSenderId: "205908688644",
  appId: "1:205908688644:web:2f9676128f774cb7449a51",
  measurementId: "G-SNL8L7TXCB"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}