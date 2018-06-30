import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { parse } from 'url';
import { homepage } from '../package.json';
// import pageAbout from './pages/about';
// import asyncComponent from './utils/asyncComponent';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';

const loading = () => (
  <div>3232333</div>
);

const pageAbout = Loadable({
  loader: () => import('./pages/about'),
  loading: loading
});

const basename = parse(homepage).pathname;

const Nav = () => (
  <nav className="Nav">
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
  </nav>
);

// const About = () => (
//   <div>
//     <h2>About</h2>
//     <p className="App-intro">
//       This is the about page, go to the <Link to="/">home page</Link>?
//     </p>
//   </div>
// );

const Home = () => (
  <div>
    <h2>Home</h2>
    <p className="App-intro">
      This is the home page, go to the <Link to="/about/">about page</Link>?
    </p>
  </div>
);

const NoMatch = () => (
  <div>
    <h2>404 Not Found</h2>
    <p className="App-intro">
      The page you were looking for does not exist.
    </p>
  </div>
);

const App = () => (
  <BrowserRouter basename={basename}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={pageAbout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
