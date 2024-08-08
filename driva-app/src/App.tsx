import {
    signInWithEmailAndPassword,
    User,
    UserCredential,
} from "firebase/auth";
import {auth} from "./firebase";

const App = () => {
    console.log(JSON.stringify(auth));
    var user: User;
    signInWithEmailAndPassword(auth, "cso4@amtech-service.com", "watskmt0").then(
        (credential: UserCredential) => {
            user = credential.user;
            if (user) {
                console.log("アプリにログインしました");
                console.log(JSON.stringify(user));
            }
        }
    );
    return <div className="App">A pp</div>;
};

export default App;

