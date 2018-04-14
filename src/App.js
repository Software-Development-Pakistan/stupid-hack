import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Final from "./Final";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/final" component={Final} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
