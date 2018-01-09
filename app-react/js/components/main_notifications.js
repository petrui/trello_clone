import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainNotifications extends Component {
  notificationList() {
    const notif = this.props.notifications;
    return Object.keys(notif).map((key, i) => (
      <div className={`card white-bg is-text-center ${key}`} key={i}>
        {notif[key][0]}
      </div>
    ));
  }

  render() {
    return (
      <div className="notifications">{this.notificationList()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.notifications,
  };
}

export default connect(mapStateToProps)(MainNotifications);
