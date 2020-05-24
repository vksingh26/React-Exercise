import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Layout from "./Layout/Layout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/past"></Route>
            <Route path="/comments"></Route>
            <Route path="/ask"></Route>
            <Route path="/show"></Route>
            <Route path="/jobs"></Route>
            <Route path="/submit"></Route>
            <Route path="/login"></Route>
            <Route path="/" exact></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
