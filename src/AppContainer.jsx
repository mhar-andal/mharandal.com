import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.object
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}
