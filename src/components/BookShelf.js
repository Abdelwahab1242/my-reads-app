import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = (props) => {
  const shelves = ["currentlyReading", "wantToRead", "read"];
  const shelveNames = ["Currently Reading", "Want To Read", "Read"];
  return (
    <div>
      {shelves.map((shelf, index) => {
        return (
          <div className="bookshelf" key={shelf}>
            <h2 className="bookshelf-title">{shelveNames[index]}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books
                  .filter((book) => {
                    return book.shelf === shelf;
                  })
                  .map((book) => {
                    return (
                      <Book
                        key={book.id}
                        book={book}
                        onChange={props.onChange}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookShelf;
