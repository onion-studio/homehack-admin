import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ScreensMainList from './Todo/List';

export default class ScreensRoot extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" component={ScreensMainList} />
        </>
      </BrowserRouter>
    );
  }
}
