import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Panel from '../../components/Panel';
import * as postActionCreators from '../../actions/posts';

const propTypes = {
  postActions: PropTypes.object.isRequired,
};

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { postActions } = this.props;
    postActions.fetchPosts();
  }

  render() {
    return (
      <div className="posts">
        <Panel
          title="Comments"
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionCreators, dispatch),
  };
}

Comments.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
