import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.object
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}
