import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { parse } from 'url';
import { homepage } from '../package.json';
import routers from 'src/routers';
import HeaderComp from 'src/pages/components/header';
import FooterComp from 'src/pages/components/footer';
import './App.less';

const basename = parse(homepage).pathname;

const App = () => (
  <BrowserRouter basename={basename}>
    <section className="app">
      <HeaderComp/>
      <section className="app-body">
        <Switch>
          <Route path="/" exact component={routers.PageHome} />
          <Route path="/about/" component={routers.PageAbout} />
          <Route path="/news/" component={routers.PageNews} />
          <Route path="/products/" component={routers.PageProducts} />
          <Redirect to='/'/>
        </Switch>
      </section>
      <FooterComp/>
    </section>
  </BrowserRouter>
);

export default App;
