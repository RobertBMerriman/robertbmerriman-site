import React, { Component } from 'react';
import './Artist.scss';
import PropTypes from 'prop-types'

export default class Artist extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.props.style} className={`artist ${this.props.className}`}>
          {this.props.name}
          {this.props.albumImage}<br/>
          {this.props.description}
          {this.props.myFaves}
        </div>
      </React.Fragment>
    );
  }
}
