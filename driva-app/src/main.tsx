import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { initializeApp } from "firebase/app";
//
// const firebaseConfig = {
//     apiKey: import.meta.env.REACT_APP_APIKEY,
//     authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
//     projectId: import.meta.env.REACT_APP_PROJECT_ID,
//     storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: import.meta.env.REACT_APP_APP_ID,
//     measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
// };
//
// // @ts-ignore
// const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
