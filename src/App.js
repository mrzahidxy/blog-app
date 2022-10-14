import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Update';
import BlogDetails from './component/BlogDetails';
import Login from './component/Login';
import NotFound from './component/NotFound';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContextAPI';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("currentuser", currentUser);

  const Required = ({ children }) => {
    return currentUser ? children : <Redirect to='/login' />
  }

  


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/create'>
              <Required><Create /></Required>
            </Route>
            <Route path='/update/:id'>
              <Required><Update /></Required>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
