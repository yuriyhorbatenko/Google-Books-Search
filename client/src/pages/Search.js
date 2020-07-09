import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    value: "",
    books: [],
  };

  componentDidMount() {
    this.searchBooks("top");
  }

  createBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }

  searchBooks = (query) => {
    API.getBook(query)
      .then(res => this.setState({ books: res.data.items.map(bookData => this.createBook(bookData)) }))
      .catch(err => console.error(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <div className="container-books">
          <h2>Results</h2>
          <List books={this.state.books} />
        </div>
      </div>
    )
  }
}

export default Search;
