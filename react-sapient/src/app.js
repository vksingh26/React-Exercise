import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Layout from "./Layout/Layout";
import NewsFeed from './components/NewsFeed/NewsFeed';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/comments"></Route>
            <Route path="/" exact component={NewsFeed}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
