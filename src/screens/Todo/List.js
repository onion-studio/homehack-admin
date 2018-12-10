import React, { Component } from 'react';
import TodoList from '../../components/Todo/List';
import TodoForm from '../../components/Todo/Form';

export default class ScreensMainList extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <TodoList />
        <TodoForm />
      </>
    );
  }
}
