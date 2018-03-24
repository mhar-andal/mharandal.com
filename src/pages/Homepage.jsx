import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import GithubLogo from 'styles/icons/github-logo.svg';

export default class Homepage extends Component {
  static propTypes = { location: PropTypes.object }; //eslint-disable-line

  state = {
    showContent: false
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showContent: true
      });
    }, 2000);
  }
  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-container background-image" />
        {this.state.showContent && (
          <div className="homepage-container title-box">
            <div className="box-content">
              <span className="title">mhar andal</span>
              <span>software engineer.</span>
              <span>web developer.</span>
              <span>photographer.</span>
              {/* <GithubLogo /> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}
