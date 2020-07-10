import React, { Component } from "react";
import API from "../../utils/API";
import "./list.css";
import Fade from 'react-reveal/Fade';

class List extends Component {

  state = {
    savedBooks: []
  }

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  handleSave = book => {

    if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
        .catch(err => console.error(err));
    }

    else {
      API.saveBook(book)
        .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (

      <Fade bottom>
        <div>
          <div>

            {this.props.books.map(result => (

              <div className="Book-card" key={result._id}>
                <div className="row">

                  <div className="col-2"></div>

                  <div className="col-1">
                    <img alt={result.title} className="book-img" src={result.image} />
                  </div>

                  <div className="col-7 book-body">
                    <div className="">

                      <h5 className="book-title">"{result.title}" by {result.authors}</h5>
                      <p className="book-description">{result.description}</p>

                      <div>
                        <a href={result.link} className="btn btn-outline-primary button-view" target="_blank" >View</a>

                        <button onClick={() => this.handleSave(result)} className="btn btn-outline-success button-save" >
                          {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                        </button>

                      </div>

                    </div>
                  </div>

                  <div className="col-2"></div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </Fade>
    )
  }
}

export default List;
