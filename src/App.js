import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Jokes from "./component/Jokes";
import Codewar from "./component/Codewar";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/quiz" render={(props) => <Quiz {...props} />} />
          <Route exact path="/jokes" render={(props) => <Jokes {...props} />} />
          <Route
            exact
            path="/codewar"
            render={(props) => <Codewar {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
