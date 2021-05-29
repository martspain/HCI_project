import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import Cart from './Screens/Cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css'

const App =() => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
      <Route path="/cart" component={Cart} />
      <Redirect to="/home" />
    </BrowserRouter>
  </div>
)

export default App;
