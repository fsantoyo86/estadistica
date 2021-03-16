import React from 'react';
import Navbar from './components/Navbar';
import Support from './components/Support';
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/aboutus" />
          <Route component={Support} path="/support" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
