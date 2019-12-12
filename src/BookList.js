import React, { Component } from 'react';
import Book from './Book';
import booksData from './bookData';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData
    };
  }

  handleDelete = id => {
    // console.log(this.state.books);
    const sortedBooks = this.state.books.filter(item => item.id !== id);
    // console.log(sortedBooks);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    return (
      <section>
        {this.state.books.map(item => {
          return (
            <Book key={item.id} info={item} handleDelete={this.handleDelete} />
          );
        })}
      </section>
    );
  }
}
