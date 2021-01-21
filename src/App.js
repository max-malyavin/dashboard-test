import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Finalize from "./components/Finalize/Finalize";
import Results from "./components/Results/Results";

import "./styles/App.scss";
import "./styles/normalize.css";

function App() {
  return (
    <React.Fragment>
      <div className="container__inner">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/finalize/:id?" component={Finalize} />
          <Route exact path="/results/:id?" component={Results} />
          <Redirect to="/" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
