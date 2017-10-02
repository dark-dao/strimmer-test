import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Шел бы ты отсюда, петушок</h1>
        <hr />
        <Link to="/">Ухожу</Link>
      </div>
    );
  }
}
