import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "../src/shared/appRoutes";

// import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./Component/HomePage";
import Quiz from "./Component/Quiz";
import NavBar from "./Component/NavBar";
import "./App.css";

const app = () => {
  return (
    <div className="App">
      <NavBar />

      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.quiz}>
            <Quiz />
          </Route>
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>
    </div>
  );
};

export default app;