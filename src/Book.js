import React, { Component } from 'react';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { img, title, author } = this.props.info;

    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            fugiat!
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Title: {title}</h3>
          <h5>Author: {author}</h5>
          <button type="button" onClick={this.handleInfo}>
            Toggle Info
          </button>
          {checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}
