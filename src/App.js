import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Protected from './components/Protected';

import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const _toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <Router>
      <div>
        <button onClick={_toggleLogIn}>
          {
            isLoggedIn ? 'Logout' : 'Login'
          }
        </button>
        <nav className="navbar">
          <Link to='/'><button>Home</button></Link>
          <Link to='/about'><button>About</button></Link> 
          {isLoggedIn && <Link to='/blog'><button>Blog</button></Link>}
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Protected isLoggedIn={isLoggedIn}>
            <Blog />
          </Protected>
        </Route>
        <Route path='*'>
          <h2>Page not found</h2>
          <Link to='/'>Click here to go Home.</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
