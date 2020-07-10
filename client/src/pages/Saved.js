import React, { Component } from "react";
import API from "../utils/API";
import List from "../components/List";
import Zoom from "react-reveal/Zoom";

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
      <div className="container-books">
        <Zoom>
          <h2 className="saved-header">Saved books</h2>
        </Zoom>
        <List books={this.state.savedBooks} />
      </div>
    )
  }
}

export default Saved;