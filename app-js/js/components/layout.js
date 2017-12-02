import React, { Component } from 'react';
import MainNavigation from './main_navigation';
import MainContent from './main_content';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <div id="main-content">
          <MainContent />
        </div>
      </div>
    );
  }
}
