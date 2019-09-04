import React, { Component, Fragment } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <h1>
            {this.props.children}
          </h1>
        </div>
      </Fragment>
    );
  }
}


