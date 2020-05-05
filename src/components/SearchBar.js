import React from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: "",
    };
  }

  updateBooks = (books) => {
    books.map((book) =>
      this.props.books
        .filter((b) => b.id === book.id)
        .map((b) => (book.shelf = b.shelf))
    );
    this.setState({ books });
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    if (query) {
      BooksAPI.search(query, 20)
        .then((books) => {
          books.map((book) => {
            return (book["shelf"] = "none");
          });
          books.length > 0
            ? this.updateBooks(books)
            : this.setState({ books: [] });
        })
        .catch((err) => {
          console.error(`The API responded with an error: ${err}`);
        });
    } else {
      this.setState({ books: [] });
    } //With any errors
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book key={book.id} book={book} onChange={this.props.onChange} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  books: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
