import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="page">
          <Nav />
          <Jumbotron />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
      </Router >
    );
  };
};

export default App;
