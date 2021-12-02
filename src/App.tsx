// ./src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import Practice from "./Practice.jsx";
import Find from "./Find.jsx";
import "./App.css";
import "./robots.txt";


//const brand = { name: "stay-fit, stay-safe", to: "/" };

const App = (): JSX.Element => {
  return (
    <div className="main">
      <h1 className="brand"> Stay Fit, StaySafe</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/find" exact component={() => <Find />} />
          <Route path="/practice" exact component={() => <Practice />} />
          <a href="https://simran18.github.io/stayfitstaysafe/"> About </a>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


