import './App.css';
import Login from './MyComponents/Login';
import Register from './MyComponents/Register';
import Header from './MyComponents/Header'
import ProfilePage from './MyComponents/ProfilePage'
import SellItem from './MyComponents/SellItem'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/sellitem">
            <SellItem />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
