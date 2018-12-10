import React, { Component } from 'react';
import TodoItem from './Item';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   id: 0,
        //   title: 'todo',
        //   interval: 0,
        //   complete: false,
        // }
      ],
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <>
        {todos.map(todo => {
          return (
            <TodoItem
              title={todo.title}
              interval={todo.interval}
              complete={todo.complete}
            />
          );
        })}
      </>
    );
  }
}
