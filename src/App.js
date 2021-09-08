import './App.css';
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'
import Demo from './components/Demo';
import Footer from './components/Footer'
import Logout from './components/Logout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () =>
  <div className="App" id="App">
    <Demo />
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    <Footer></Footer>
  </div>


export default App;
