import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Info } from "./pages/Info";
import { Profile } from "./pages/Profile";
import { Alert } from "./components/Alert/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container pt-5">
            <Alert alert={{ text: "test" }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/info" component={Info} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
