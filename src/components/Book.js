import React from "react";
import PropTypes from "prop-types";

class Book extends React.Component {
  handleChange(shelf) {
    this.props.onChange(this.props.book, shelf);
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("${
                this.props.book.imageLinks === undefined
                  ? ""
                  : this.props.book.imageLinks.smallThumbnail
              }")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf}
              onChange={(e) => this.handleChange(e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Book;
