import { useState, useEffect } from 'react';
import './App.css';

import {
    getAuth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
    UserCredential,
} from "firebase/auth";

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";
import {getStorage, connectStorageEmulator} from "firebase/storage";
import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

function App() {
    // useStateフックで状態を管理
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    initializeApp(firebaseConfig);
    // const auth: Auth = getAuth();
    // const db: Firestore = getFirestore(app);
    // const storage: FirebaseStorage = getStorage();

    const emailChange = (e: any) => setEmail(e.target.value);
    const passwordChange = (e: any) => setPassword(e.target.value);
    let user: User;
    let emulatorConnected = false;

    // const firebase = initializeApp(firebaseConfig);


    // useEffectフックで副作用を処理
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // countが変更されるたびにこの効果が発生します

    useEffect(() => {
        if(!emulatorConnected) {
            const isEmulating = window.location.hostname === "localhost";
            const auth = getAuth();
            const storage = getStorage();
            const db = getFirestore();
            const functions = getFunctions();
            if (isEmulating) {
                connectAuthEmulator(auth, "http://localhost:9099");
                connectStorageEmulator(storage, "localhost", 9199);
                connectFirestoreEmulator(db, 'localhost', 8080);
                connectFunctionsEmulator(functions, "localhost", 5001);
            }
            signInWithEmailAndPassword(auth, "cso4@amtech-service.com", "watskmt0").then(
                (credential: UserCredential) => {
                    user = credential.user;
                    if (user) {
                        console.log("アプリにログインしました");
                        console.log(JSON.stringify(user));
                    }
                }
            );

            emulatorConnected = true;
        }
    }, []);

    const createAccount = (email: string, password: string): void => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("new user: "+user.uid+" / "+user.email);
                setMessage("ユーザーの作成を行いました。"+user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("ERR :"+errorCode+" / "+errorMessage);
            });
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello, React with Hooks!</h1>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </header>
            <div className="main">
                <input type="text" name="email" id="email" value={email} onChange={emailChange} />
                <input type="text" name="password" id="password" value={password} onChange={passwordChange} />
                <button type="button" onClick={() => createAccount(email, password)} />
                <label>{message}</label>
            </div>
        </div>
    );
}

export default App;
