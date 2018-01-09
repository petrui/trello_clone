import React, { Component } from 'react';
import MainNavigation from './main_navigation';
import MainContent from './main_content';
import MainNotifications from './main_notifications';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <MainNotifications />
        <div id="main-content">
          <MainContent />
        </div>
      </div>
    );
  }
}
