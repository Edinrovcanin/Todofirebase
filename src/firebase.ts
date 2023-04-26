
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtm8aF30U5WAWn4fVsjhuBHG-6wMICUn0",
    authDomain: "todonajnoviji.firebaseapp.com",
    projectId: "todonajnoviji",
    storageBucket: "todonajnoviji.appspot.com",
    messagingSenderId: "427398372013",
    appId: "1:427398372013:web:f63b1599bbbcb1af458424",
    measurementId: "G-JWVJE6ZKTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;