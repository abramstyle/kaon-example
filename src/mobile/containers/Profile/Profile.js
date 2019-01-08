import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LOADING_STATES } from '../../../constants';
import * as profileActionCreators from './actions/profile';

import './style.css';
import image from './600x200.jpeg';

const propTypes = {
  profile: PropTypes.object.isRequired,
  profileActions: PropTypes.object.isRequired,
};

class Profile extends Component {
  componentDidMount() {
    const { profile } = this.props;

    if (profile.get('loadingState') !== LOADING_STATES.SUCCESS) {
      this.loadProfile();
    }
  }

  loadProfile() {
    const { profileActions } = this.props;

    profileActions.fetchProfile();
  }

  renderProfile() {
    const { profile } = this.props;
    return profile.get('loadingState') === LOADING_STATES.SUCCESS ? (
      <div styleName="profile-detail">
        <div styleName="meta" >
          <div styleName="avatar">
            <img
              src={
          profile.get('profile').get('avatar')
        }
              alt=""
            />
          </div>
          <div styleName="info">
            <div styleName="field">
              <div styleName="name">firstName: </div>
              <div styleName="value">{profile.get('profile').get('firstName')}</div>
            </div>
            <div styleName="field">
              <div styleName="name">lastName: </div>
              <div styleName="value">{profile.get('profile').get('lastName')}</div>
            </div>
            <div styleName="field">
              <div styleName="name">username: </div>
              <div styleName="value">{profile.get('profile').get('username')}</div>
            </div>
            <div styleName="field description">
              <div styleName="value">{profile.get('profile').get('description')}</div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="profile-detail">Loading...</div>
    );
  }

  render() {
    const profileDetail = this.renderProfile();

    return (
      <div styleName="profile-page">
        <header>
          <img src={image} alt="Header" />
          <div styleName="content">
            <h1>Profile</h1>
          </div>
        </header>
        {profileDetail}
      </div>
    );
  }
}

Profile.propTypes = propTypes;

function mapStateToProps(state) {
  const { profile } = state;

  return {
    profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileActions: bindActionCreators(profileActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
