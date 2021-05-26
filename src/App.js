import { useAuthState } from 'react-firebase-hooks/auth'
import './App.css';
import Login from './Screens/Login';
import { auth } from './Services/FirebaseConnection';
import Home from './Screens/Home';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {
        user ? <Home /> : <Login />
      }
    </div>
  );
}

export default App;
