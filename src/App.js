import "milligram";
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    function login() {
        if (email) {
            setLoggedIn(true);
        }
    }

    function logout() {
        setLoggedIn(false);
        setEmail('');
    }

    let content;
    if (loggedIn) {
        content = <div>
            <h2>Witaj {email}!</h2>
            <button onClick={logout}>Wyloguj</button>
        </div>
    } else {
        content = <div>
            <label>Zaloguj się e-mailem</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type="button" onClick={login}>Wchodzę</button>
        </div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
