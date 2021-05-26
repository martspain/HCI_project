import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';

const App =() => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
