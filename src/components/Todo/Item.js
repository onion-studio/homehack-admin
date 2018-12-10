import React, { Component } from 'react';

export default class TodoItem extends Component {
  static defaultProps = {
    title: 'todo',
    interval: 0,
    complete: false,
  };
  render() {
    return (
      <li>
        <span>{this.props.title}</span>
        <span>주기: {this.props.interval}</span>
        <input type="checkbox" value={this.props.complete} />
      </li>
    );
  }
}
