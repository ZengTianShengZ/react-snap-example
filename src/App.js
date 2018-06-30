import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { parse } from 'url';
import { homepage } from '../package.json';
import Loadable from 'react-loadable';
// import asyncComponent from 'src/utils/asyncComponent';
// const PageHome = asyncComponent('src/pages/home');
// const PageAbout = asyncComponent('src/pages/about');
// const PageNews = asyncComponent('src/pages/news');
// const PageProducts = asyncComponent('src/pages/products');

const loadingComponent = () => (
  <div></div>
);

const PageHome = Loadable({
  loader: () => import('src/pages/home'),
  loading: loadingComponent
});
const PageAbout = Loadable({
  loader: () => import('src/pages/about'),
  loading: loadingComponent
});
const PageNews = Loadable({
  loader: () => import('src/pages/news'),
  loading: loadingComponent
});
const PageProducts = Loadable({
  loader: () => import('src/pages/products'),
  loading: loadingComponent
});

const basename = parse(homepage).pathname;

const App = () => (
  <BrowserRouter basename={basename}>
    <section className="app">
      <header className="app-header">app-header</header>
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/about/" component={PageAbout} />
        <Route path="/news/" component={PageNews} />
        <Route path="/products/" component={PageProducts} />
        <Redirect to='/'/>
      </Switch>
      <footer className="app-footer">app-header</footer>
    </section>
  </BrowserRouter>
);

export default App;
