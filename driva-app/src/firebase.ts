// インポート対象のFirebaseApp,Auth,Firestore,FirebaseStorageはTypeScriptの型です
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

// process.env~で先ほど.envファイルに入力したfirebaseConfigの値を参照しています
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyD0rd_TzjM0bjLNTe1zzy7e8CSTBCdrBlY",
//     authDomain: "driva-test-6ba52.firebaseapp.com",
//     projectId: "driva-test-6ba52",
//     storageBucket: "driva-test-6ba52.appspot.com",
//     messagingSenderId: "648529769356",
//     appId: "1:648529769356:web:728b9362d98a8725435ca9",
//     measurementId: "G-05KM70GYTJ",
// };

// NOTE >> Firebaseの初期化を行います。
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth();
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage();