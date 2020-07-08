import React, { Component } from "react";
import API from "../utils/API";
import List from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: [],
  }

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h2>Saved books</h2>
        <List books={this.state.savedBooks} />
      </div>
    )
  }
}

export default Saved;